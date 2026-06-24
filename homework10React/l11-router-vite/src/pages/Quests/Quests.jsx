import { Link, useNavigate } from 'react-router-dom'
import { quests } from "../../Data/quests";


export const Quests = () =>{

    const navigate = useNavigate()

    return(
        <section>
            <h2>Quests</h2>
              <button className="nav-button" onClick={() => navigate("/")}>Home</button>
             <button className="nav-button" onClick={() => navigate("/about")} style={{margin: "8px"}}>Go About</button>

            <ul>
                {quests.map((quest) => (
                    <li key={quest.id} className="quest-item">
                        <Link className="quest-link" to={`/quests/${quest.id}`}>{quest.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}