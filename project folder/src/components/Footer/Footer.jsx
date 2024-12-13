import Image from "next/image"
import logo from "../../../public/logo.svg"
import paperAirplane from "../../../public/paperAirplaneIcon.svg"
import telephone from "../../../public/telephoneIcon.svg"
import marker from "../../../public/mapMarkerWhite.svg"
import Link from "next/link"

export default function Footer(){
    return(
        <footer>
            <section>
                <div id="footer-top">
                    <div>
                        <Image alt="Logo icon" width={30} height={20} src={logo}/>
                        <h2>DIN MÆGLER</h2>
                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words.
                    </p>
                </div>
                <div id="footer-bottom">
                    <div className="info-box">
                        <ul>
                            <li>
                                <Image alt="Phone icon" width={20} height={20} src={telephone}/>
                                <div>
                                    <p>Ring til os</p>
                                    <p><strong>+45 7070 4000</strong></p>
                                </div>
                            </li>
                            <li>
                                <Image alt="Email icon" width={20} height={20} src={paperAirplane}/>
                                <div>
                                    <p>Send en mail</p>
                                    <p><strong>4000@dinmaegler.com</strong></p>
                                </div>
                            </li>
                            <li>
                                <Image alt="marker icon" height={50} width={50} src={marker}/>
                                <div>
                                    <p>Butik</p>
                                    <p><strong>Stændertorvet 78, 4000 Roskilde</strong></p>
                                </div>
                            </li>
                        </ul>
                        <p>Din Mægler Roskilde, er din bolig butik i lokalområdet.</p>
                    </div>
                    <div className="footer-links">
                        <section>
                            <h3>Quick Links</h3>
                            <ul>
                                <li>
                                    <Link href={"/propertyList/none"}>
                                        <p>Boliger til salg</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <p>Mæglere</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/"}>
                                        <p>Kontakt os</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/login"}>
                                        <p>Log ind / bliv bruger</p>
                                    </Link>
                                </li>
                            </ul>
                        </section>
                        <div>
                            <p>Medlem af</p>
                            <p><strong>DMS</strong></p>
                            <p>Dansk Mægler Sammenslutning</p>
                        </div>
                    </div>
                </div>
                <p>Layout By Jit Banik 2020</p>
            </section>
        </footer>
    )
}