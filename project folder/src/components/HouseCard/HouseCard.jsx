import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function HouseCard({ property, isLoggedIn, token }){
    return(
        <article className="house-card" key={property.id}>
            <Image alt="property image" height={property.images[0].height} width={property.images[0].width} src={property.images[0].url}/>
            <div>
                {isLoggedIn ? <FavoriteButton propertyId={property.id} token={token}/> : null}
                <p><strong>{property.adress1}</strong></p>
                <p>{property.postalcode+" "+property.city}</p>
                <p><strong>{property.type}</strong>{" • Ejerudgift: "+property.cost+" kr."}</p>
                <div>
                    <div>
                        <span id={`energy-type-${property.energylabel}`}>{property.energylabel}</span>
                        <p>{property.rooms.slice(0, 1)+" værelser • "+property.livingspace+" m²"}</p>
                    </div>
                    <p><strong>{"Kr. "+property.price}</strong></p>
                </div>
            </div>
        </article>
    )
}