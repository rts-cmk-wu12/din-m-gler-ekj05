"use client"
import Image from "next/image";
import emptyHeart from "../../../public/emptyHeart.svg"
import fullHeart from "../../../public/fullHeart.svg"
import { useEffect, useState } from "react";

export default function FavoriteButton({ token, propertyId }){
    const [isHeartFull, setIsHeartFull] = useState(false)
    const [userData, setUserData] = useState(null)
    let favoriteList = []

    async function fetchCurrentFavorites(){
        const userResponse = await fetch("https://dinmaegler.onrender.com/users/me", {
            method: "GET",
            headers: {
                Authorization: "Bearer "+token.value
            }
        })
        const data = await userResponse.json()
        setUserData(data)
        favoriteList = data.homes
        setIsHeartFull(favoriteList.includes(propertyId))
    }

    useEffect(()=>{
        fetchCurrentFavorites()
    }, [])

    async function handleFavoriteClick(e){
        e.preventDefault()
        setIsHeartFull(!isHeartFull)
        
        const userResponse = await fetch("https://dinmaegler.onrender.com/users/me", {
            method: "GET",
            headers: {
                Authorization: "Bearer "+token.value
            }
        })
        const data = await userResponse.json()
        favoriteList = data.homes

        if(favoriteList.includes(propertyId)){
            favoriteList = favoriteList.filter((id)=>(id !== propertyId))
        } else{
            favoriteList.push(propertyId)
        }
        fetch("https://dinmaegler.onrender.com/users/"+userData.id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer "+token.value
            },
            body: JSON.stringify({
              homes: favoriteList
            })
        })
        console.log(favoriteList)
    }

    return(
        <button className="favorite-button" onClick={handleFavoriteClick}>
            <Image src={isHeartFull ? fullHeart : emptyHeart} alt="heart icon" height={50} width={50}/>
        </button>
    )
}