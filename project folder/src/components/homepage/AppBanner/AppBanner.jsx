import Image from "next/image";
import phones from "../../../../public/phones.png"
import playStore from "../../../../public/playStoreLogo.svg"
import apple from "../../../../public/appleLogo.svg"

export default function AppBanner(){
    return(
        <article className="app-banner">
            <div>
                <div>
                    <h2>Hold dig opdateret på salgsprocessen</h2>
                    <p>
                        Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik 
                        med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.
                    </p>
                    <div>
                        <button className="play-store-button">
                            <Image alt="play store logo" height={50} width={50} src={playStore}/>
                            <p>Google Play</p>
                        </button>
                        <button className="apple-button">
                            <Image alt="play store logo" height={50} width={50} src={apple}/>
                            <p>Apple Store</p>
                        </button>
                    </div>
                </div>
                <Image alt="phone image" height={500} width={500} src={phones}/>
            </div>
        </article>
    )
}