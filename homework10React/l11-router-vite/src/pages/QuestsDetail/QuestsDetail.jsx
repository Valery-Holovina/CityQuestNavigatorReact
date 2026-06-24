import { useNavigate, useParams } from "react-router-dom";
import { quests } from "../../Data/quests";
import { NotFound } from "../NotFound/NotFound";

export const QuestsDetail = () =>{
    const {id} = useParams()
    const quest = quests.find(i => i.id === Number(id));
    const navigate = useNavigate()

    if(!quest){
         return(
        <NotFound />
    )
    }

    return(
        <section>
            <h2>QuestsDetail</h2>
            <button className="nav-button" onClick={() => navigate("/quests")}>Back</button>

            <hr></hr>
            <p><strong>Title:</strong> {quest.title}</p>
            <p><strong>Level:</strong> {quest.level}</p>
            <p><strong>Duration:</strong> {quest.duration}</p>
            <p><strong>Descriprion:</strong> {quest.description}</p>
            
        </section>
    )
}