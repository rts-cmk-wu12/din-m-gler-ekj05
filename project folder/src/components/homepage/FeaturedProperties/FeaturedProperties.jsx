import HouseCard from "@/components/HouseCard/HouseCard"
import Link from "next/link"

export default async function FeaturedProperties(){
    const response = await fetch("https://dinmaegler.onrender.com/homes?_limit=4&_start="+Math.floor(Math.random()*10))
    const data = await response.json()

    return(
        <section className="featured-section">
            <div>
                <h2>Udvalgte Boliger</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum available but 
                    the this in majority have suffered alteration in some
                </p>
                <div>
                    {data.map((property)=>(
                        <Link key={property.id} className="property-link" href={"/propertyDetails/"+property.id}>
                            <HouseCard key={property.id} property={property}/>
                        </Link>
                    ))}
                </div>
                <Link href={"/propertyList/none"}>
                    <button>Se alle boliger</button>
                </Link>
            </div>
        </section>
    )
}