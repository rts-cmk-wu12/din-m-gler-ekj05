import Titlebanner from "@/components/TitleBanner/Titlebanner";
import FilterAndList from "./FilterAndList";
import { cookies } from "next/headers";

export default async function propertyList({ params }){
    const { type } = await params
    const response = await fetch(type === "none" ? "https://dinmaegler.onrender.com/homes" : "https://dinmaegler.onrender.com/homes?type_eq="+type)
    const data = await response.json()
    const cookieStore = await cookies()
    const token = cookieStore.get("userToken")

    return(
        <>
            <Titlebanner titleText="Boliger til salg"/>
            <section className="properties-page-section">
                <h2><span>Søg</span> efter dit drømmehus</h2>
                <FilterAndList token={token} propertyData={data} currentType={type}/>
            </section>
        </>
    )
}