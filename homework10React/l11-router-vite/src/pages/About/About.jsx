import { useNavigate } from "react-router-dom"

 
export const About = () =>{

    const navigate = useNavigate()
 
    return(
    <section>
        <h2>About Page</h2>
        <h5>We provide different activities! You can visit links below and explore them 😁</h5>
        <button className="nav-button" onClick={() => navigate("/places")}>Places</button>
        <br></br>
        <button className="nav-button" onClick={() => navigate("/quests")}>Quests</button>
        <br></br>
        <button className="nav-button" onClick={() => navigate("/")}>Home</button>
 
    </section>
    )
}