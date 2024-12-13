import Image from "next/image"
import bannerImage from "../../../../public/bigBuildingImage.jpg"
import arrow from "../../../../public/rightArrow.svg"

export default function MailBanner(){
    return(
        <article className="mail-banner-article">
            <div className="banner-filter"></div>
            <Image alt="banner image" height={100} width={1300} src={bannerImage}/>
            <div className="banner-content">
                <h2>
                    Tilmeld dig vores nyhedsbrev og 
                    <br/>
                    hold dig opdateret på boligmarkedet
                </h2>
                <label>
                    <input type="text" placeholder="Indtast din email adresse"/>
                    <Image alt="arrow icon" height={50} width={50} src={arrow}/>
                </label>
            </div>
        </article>
    )
}