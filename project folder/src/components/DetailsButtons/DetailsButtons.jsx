"use client"
import imageIcon from "../../../public/imageIcon.svg"
import floorplanIcon from "../../../public/floorplanIcon.svg"
import markerIcon from "../../../public/hollowMarkerIcon.svg"
import Image from "next/image"
import { useState } from "react"

export default function DetailsButtons({ propertySrc, floorplanSrc, latitude, longitude }){
    const [imageSrc, setImageSrc] = useState(propertySrc)
    const [isPopupShown, setIsPopupShown] = useState(false)
    const [isMap, setIsMap] = useState(false)

    function handleImageSrc(e){
        if(e.target.id === "image-icon"){
            setIsMap(false)
            setImageSrc(propertySrc)
            if(!isPopupShown){
                setIsPopupShown(!isPopupShown)
            }
        } else if(e.target.id === "floorplan-icon"){
            setIsMap(false)
            setImageSrc(floorplanSrc)
            if(!isPopupShown){
                setIsPopupShown(!isPopupShown)
            }
        } else if (e.target.id === "marker-icon"){
            setIsMap(true)
            if(!isPopupShown){
                setIsPopupShown(!isPopupShown)
            }
        }
    }

    function handleClosePopup(){
        setIsPopupShown(false)
    }

    return(
        <>
            <Image id="image-icon" alt="image icon" height={500} width={500} src={imageIcon} onClick={handleImageSrc}/>
            <Image id="floorplan-icon" alt="floorplan icon" height={500} width={500} src={floorplanIcon} onClick={handleImageSrc}/>
            <Image id="marker-icon" alt="marker icon" height={500} width={500} src={markerIcon} onClick={handleImageSrc}/>
            <div className={`property-details-popup ${isPopupShown ? "popup-shown" : ""}`} onClick={handleClosePopup}>
                <div onClick={(e)=>(e.stopPropagation())}>
                    {isMap ?
                        <iframe className="main-image" src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14204.846948655037!2d"+longitude+"!3d"+latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1733143629924!5m2!1sda!2sdk"} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        :
                        <Image className="main-image" alt="popup image" height={500} width={500} src={imageSrc}/>
                    }
                    <div>
                        <Image id="image-icon" alt="image icon" height={500} width={500} src={imageIcon} onClick={handleImageSrc}/>
                        <Image id="floorplan-icon" alt="floorplan icon" height={500} width={500} src={floorplanIcon} onClick={handleImageSrc}/>
                        <Image id="marker-icon" alt="marker icon" height={500} width={500} src={markerIcon} onClick={handleImageSrc}/>
                    </div>
                </div>
            </div>
        </>
    )
}