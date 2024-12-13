import AgentCard from "@/components/AgentCard/AgentCard"

export default async function FeaturedEmployees(){
    const response = await fetch("https://dinmaegler.onrender.com/agents?_limit=3")
    const data = await response.json()
    
    return(
        <section className="agents-section">
            <h2>Mød vores engagerede medarbejdere</h2>
            <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
            <div>
                {data.map((agent)=>(
                    <AgentCard key={agent.id} agent={agent}/>
                ))}
            </div>
            <button>Se alle mæglere</button>
        </section>
    )
}