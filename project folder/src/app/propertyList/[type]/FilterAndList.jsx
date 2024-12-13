"use client"
import HouseCard from "@/components/HouseCard/HouseCard";
import SliderWithValues from "@/components/SliderWithValues/SliderWithValues";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FilterAndList({ propertyData, currentType, token }){
    const params = useSearchParams()
    const pathname = usePathname()
    const minPrice = Number(params.get("minPrice") || 0)
    const maxPrice = Number(params.get("maxPrice") || 12000000)
    const [filteredData, setFilteredData] = useState(propertyData)
    const router = useRouter()
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))

    function handleTypeChange(e){
        router.replace(e.target.value+`?minPrice=${minPrice}&maxPrice=${maxPrice}`, {shallow: true})
    }

    useEffect(()=>{
        setFilteredData(propertyData.filter((property)=>(property.price > minPrice && property.price < maxPrice)))
    }, [minPrice, maxPrice, pathname])

    return(
        <>
            <div>
                <div className="property-type-container">
                    <p>Ejendomstype</p>
                    <select name="ejendomstype" value={currentType} onChange={handleTypeChange}>
                        <option value="none" hidden>Ejendomstype</option>
                        <option value="none">Alle</option>
                        <option value="Villa">Villa</option>
                        <option value="Landejendom">Landejendom</option>
                        <option value="Ejerlejlighed">Ejerlejlighed</option>
                        <option value="Byhus">Byhus</option>
                    </select>
                </div>
                <SliderWithValues/>
            </div>
            <div className="all-properties-container">
                {filteredData.map((property)=>(
                    <Link key={property.id} className="property-link" href={"/propertyDetails/"+property.id}>
                        <HouseCard key={property.id} property={property} token={token} isLoggedIn={isLoggedIn}/>
                    </Link>
                ))}
            </div>
        </>
    )
}