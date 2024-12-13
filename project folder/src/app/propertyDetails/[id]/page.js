import Image from "next/image";
import favoriteIcon from "../../../../public/favoriteIcon.svg"
import instagramIcon from "../../../../public/instagramLogo.svg"
import linkedinIcon from "../../../../public/linkedinLogo.svg"
import skypeIcon from "../../../../public/skypeLogo.svg"
import phone from "../../../../public/phoneBlack.svg"
import paperAirplane from "../../../../public/paperAirplaneBlack.svg"
import DetailsButtons from "@/components/DetailsButtons/DetailsButtons";

export default async function propertyDetails({params}){
    const { id } = await params
    const response = await fetch("https://dinmaegler.onrender.com/homes/"+id)
    const propertyData = await response.json()

    return(
        <>
            <Image className="details-image" alt="property image" src={propertyData.images[0].url} height={propertyData.images[0].height} width={propertyData.images[0].width}/>
            <div className="property-info-container-outer">
                <div className="property-info-container-small">
                    <div>
                        <p><strong>{propertyData.adress1+" "+propertyData.postalcode+" "+propertyData.city}</strong></p>
                    </div>
                    <div className="icon-container">
                        <DetailsButtons propertySrc={propertyData.images[0].url} floorplanSrc={propertyData.floorplan.url} latitude={propertyData.lat} longitude={propertyData.long}/>
                        <Image alt="favorite icon" height={50} width={50} src={favoriteIcon}/>
                    </div>
                    <p><strong>Kr. {propertyData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</strong></p>
                </div>
                <div className="property-info-container-large">
                    <ul>
                        <li>
                            <p>Sagsnummer:  </p><p>{Math.ceil(Math.random() * 10000000000)}.</p>
                        </li>
                        <li>
                            <p>Boligareal:  </p><p>{propertyData.livingspace}m²</p>
                        </li>
                        <li>
                            <p>Grundareal:  </p><p>{propertyData.lotsize}m²</p>
                        </li>
                        <li>
                            <p>Rum/værelser:</p><p>{propertyData.rooms}</p>
                        </li>
                        <li>
                            <p>Antal Plan:  </p><p>{propertyData.floorplan ? 1 : 0}</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Kælder:     </p><p>{propertyData.basementsize ? propertyData.basementsize : "-"}</p>
                        </li>
                        <li>
                            <p>Byggeår:    </p><p>{propertyData.built}</p>
                        </li>
                        <li>
                            <p>Ombygget:   </p><p>{propertyData.remodel ? propertyData.remodel : "-"}</p>
                        </li>
                        <li>
                            <p>Energimærke:</p><p>{propertyData.energylabel}</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Udbetaling:           </p><p>Kr. {propertyData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        </li>
                        <li>
                            <p>Brutto ex ejerudgift:</p><p>Kr. {propertyData.gross.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        </li>
                        <li>
                            <p>Netto ex ejerudgift: </p><p>Kr. {propertyData.netto.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        </li>
                        <li>
                            <p>Ejerudgifter:        </p><p>Kr. {propertyData.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h2><strong>Beskrivelse</strong></h2>
                        <p>{propertyData.description}</p>
                    </div>
                    <div>
                        <h2><strong>Ansvalig mægler</strong></h2>
                        <article>
                            <div className="agent-image-container">
                                <Image alt="agent image" height={propertyData.agent.image.height} width={propertyData.agent.image.width} src={propertyData.agent.image.url}/>
                                <div>
                                    <Image alt="instagram logo icon" height={50} width={50} src={instagramIcon}/>
                                    <Image alt="linkedin logo icon" height={50} width={50} src={linkedinIcon}/>
                                    <Image alt="skype logo icon" height={50} width={50} src={skypeIcon}/>
                                </div>
                            </div>
                            <div className="agent-info-container">
                                <h3><strong>{propertyData.agent.name}</strong></h3>
                                <p>{propertyData.agent.title}</p>
                                <div>
                                    <Image alt="phone icon" height={50} width={50} src={phone}/>
                                    <p>{propertyData.agent.phone}</p>
                                </div>
                                <div>
                                    <Image alt="paper airplane icon" height={50} width={50} src={paperAirplane}/>
                                    <p>{propertyData.agent.email}</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}