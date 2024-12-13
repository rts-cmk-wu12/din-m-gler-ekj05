import Image from "next/image"
import linkedIn from "../../../public/linkedinIcon.svg"
import mail from "../../../public/mailIcon.svg"

export default function AgentCard({ agent }){
    return(
        <article className="agent-card">
            <Image alt="agent image" width={agent.image.width} height={agent.image.height} src={agent.image.url}/>
            <h3>{agent.name}</h3>
            <p>{agent.title}</p>
            <div>
                <Image alt="mail icon" width={50} height={50} src={mail}/>
                <Image alt="linkedin icon" width={50} height={50} src={linkedIn}/>
            </div>
        </article>
    )
}