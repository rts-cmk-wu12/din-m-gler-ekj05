import Image from "next/image";
import bannerImage from "../../../public/titleBannerImage.jpg"

export default function Titlebanner({ titleText }){
    return(
        <div className="title-banner-container">
            <Image alt="title banner image" width={2000} height={200} priority src={bannerImage}/>
            <h2>{titleText}</h2>
        </div>
    )
}