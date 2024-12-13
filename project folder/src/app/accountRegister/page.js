import Titlebanner from "@/components/TitleBanner/Titlebanner";

export default function accountRegister(){
    return(
        <>
            <Titlebanner titleText={"Opret bruger"}/>
            <article className="register-article">
                <h2>Opret bruger hos Din Mægler</h2>
                <form action="">
                    <label>
                        <p>Fulde navn</p>
                        <input placeholder="Fulde navn" type="text" />
                    </label>
                    <label>
                        <p>Email</p>
                        <input placeholder="Email" type="text" />
                    </label>
                    <label>
                        <p>Password</p>
                        <input placeholder="Password" type="text" />
                    </label>
                    <label>
                        <p>Beræft password</p>
                        <input placeholder="Beræft password" type="text" />
                    </label>
                    <button type="submit">Log ind</button>
                </form>
            </article>
        </>
    )
}