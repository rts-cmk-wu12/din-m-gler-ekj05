"use client"
import Titlebanner from "@/components/TitleBanner/Titlebanner";

export default async function favorites(){

    async function fetchFavorites(){
        const userResponse = await fetch("https://dinmaegler.onrender.com/users/me", {
            method: "GET",
            headers: {
                Authorization: "Bearer "+token.value
            }
        })
        const data = await userResponse.json()
    }

    return(
        <>
            <Titlebanner titleText={"Mine favoritboliger"}/>
            <input className="favorites-search-input" type="search" placeholder="Søg i favoritter"/>
            <div className="favorites-list-container">

            </div>
        </>

    )
}