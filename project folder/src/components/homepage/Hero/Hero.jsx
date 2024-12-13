import Image from "next/image"
import heroImage from "../../../../public/heroHouseImage.jpg"

export default function Hero(){
    return(
        <article className="hero-image-container">
            <Image alt="decorative hero image" width={1200} height={500} src={heroImage}/>
            <div>
                <h2>Søg efter din drømmebolig</h2>
                <section>
                    <h3><span>Søg </span>blandt 154 boliger til salg i 74 butikker</h3>
                    <form>
                        <label htmlFor="propertySearch">
                            <p>Hvad skal din næste bolig indeholde</p>
                            <input id="propertySearch" type="text" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"/>
                        </label>
                        <button type="submit">Søg</button>
                    </form>
                </section>
            </div>
        </article>
    )
}