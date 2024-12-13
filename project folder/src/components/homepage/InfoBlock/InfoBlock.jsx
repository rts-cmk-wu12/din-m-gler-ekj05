import Image from "next/image";
import infoImage from "../../../../public/infoBlockimage.jpg"
import marker from "../../../../public/mapMarker.svg"
import house from "../../../../public/house.svg"
import houseHand from "../../../../public/houseHand.svg"
import customerHand from "../../../../public/customerHand.svg"
import propertyHand from "../../../../public/propertyHand.svg"

export default function InfoBlock(){
    return(
        <section className="info-block-section">
            <div>
                <div>
                    <Image alt="info image" height={1000} width={1000} src={infoImage}/>
                    <section>
                        <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
                        <h3>Det synes vi siger noget om os!</h3>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when 
                            looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted 
                            by the readable content of a page when looking at its layout.
                        </p>
                        <div>
                            <div>
                                <Image alt="properties sold icon" height={50} width={50} src={houseHand}/>
                                <div className="flex-div">
                                    <h4>4829</h4>
                                    <p>boliger solgt</p>
                                </div>
                            </div>
                            <div>
                                <Image alt="properties for sale icon" height={50} width={50} src={house}/>
                                <div className="flex-div">
                                    <h4>158</h4>
                                    <p>boliger til salg</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <ul>
                    <li>
                        <Image alt="property icon" height={50} width={50} src={propertyHand}/>
                        <div>
                            <h3>Bestil et salgstjek</h3>
                            <p>
                                Med et Din Mægler Salgstjek bliver 
                                du opdateret på værdien af din bolig.
                            </p>
                        </div>
                    </li>
                    <li>
                        <Image alt="marker icon" height={50} width={50} src={marker}/>
                        <div>
                            <h3>74 butikker</h3>
                            <p>
                                Hos Din Mægler er din bolig til salg i alle vores 
                                74 butikker, som er fordelt rundt om i Danmark.
                            </p>
                        </div>
                    </li>
                    <li>
                        <Image alt="customer icon" height={50} width={50} src={customerHand}/>
                        <div>
                            <h3>Tilmeld køberkartotek</h3>
                            <p>
                                Når du er tilmeldt vores køberkartotek, bliver du 
                                kontaktet inden en ny bolig bliver annonceret.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}