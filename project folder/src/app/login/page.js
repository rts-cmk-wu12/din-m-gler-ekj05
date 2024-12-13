"use client"
import Titlebanner from "@/components/TitleBanner/Titlebanner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function login(){
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const router = useRouter()

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch("https://dinmaegler.onrender.com/auth/local", {
            "method": "POST",
            "headers": {
              "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                identifier: emailValue.toString(),
                password: passwordValue.toString()
            })
        })
        const data = await response.json()
        localStorage.setItem("isLoggedIn", true)
        router.push("/api/login?token="+data.jwt)
    }
    
    function handleChange(e){
        const type = e.target.type
        const value = e.target.value
        
        switch(type){
            case "email":
                setEmailValue(value)
                break;
            case "password":
                setPasswordValue(value)
                break;
            default:
                console.log("switch case failed")
        }
    }

    return(
        <>
            <Titlebanner titleText={"Log ind"}/>
            <article className="login-article">
                <h2>Log ind på din konto</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Email</p>
                        <input placeholder="Email" type="email" value={emailValue} onChange={handleChange}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input placeholder="Password" type="password" value={passwordValue} onChange={handleChange}/>
                    </label>
                    <button type="submit">Log ind</button>
                </form>
                <div>
                    <p>Log ind med</p>
                    <div>
                        <button id="google">Google</button>
                        <button id="facebook">Facebook</button>
                        <button id="twitter">Twitter</button>
                    </div>
                    <p className="create-text">Har du ikke en konto? <Link href={"/accountRegister"}>Opret bruger.</Link></p>
                </div>
            </article>
        </>
    )
}