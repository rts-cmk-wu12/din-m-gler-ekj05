"use client"
import Image from "next/image"
import paperAirplane from "../../../public/paperAirplaneIcon.svg"
import telephone from "../../../public/telephoneIcon.svg"
import user from "../../../public/userIcon.svg"
import logo from "../../../public/logo.svg"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)
    const router = useRouter()
    const pathname = usePathname()

    useEffect(()=>{
        const storedStatus = JSON.parse(localStorage.getItem("isLoggedIn"))
        if(storedStatus !== null){
            setIsLoggedIn(storedStatus)
        }
    }, [pathname])

    async function handleLogButton(){
        if(isLoggedIn){
            await fetch("/api/logout", {
                method: "GET"
            })
            setIsLoggedIn(false)
            localStorage.setItem("isLoggedIn", false)
            router.push("/login")
        } else if(!isLoggedIn){
            router.push("/login")
        }
    }

    return(
        <header>
            <div className="header-top styling-container">
                <div>
                    <section className="contact-info-section">
                        <div>
                            <Image alt="Email icon" width={20} height={20} src={paperAirplane} />
                            <p>4000@dinmaegler.com</p>
                        </div>
                        <div>
                            <Image alt="Phone icon" width={20} height={20} src={telephone} />
                            <p>+45 7070 4000</p>
                        </div>
                    </section>

                    <section className="login-section">
                        <button onClick={handleLogButton}>
                            <Image alt="User icon" width={20} height={20} src={user} />
                            <p>{isLoggedIn ? "Log ud" : "Log ind"}</p>
                        </button>
                    </section>
                </div>
            </div>
            
            <section className="header-bottom styling-container">
                <div>
                    <Link href={"/"}>
                        <Image alt="Logo icon" width={30} height={20} src={logo}/>
                        <h1>DIN MÆGLER</h1>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link href={"/propertyList/none"}>Boliger til salg</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Mæglere</Link>
                            </li>
                            <li>
                                <Link href={"/favorites"}>Mine favoritter</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Kontakt os</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    )
}