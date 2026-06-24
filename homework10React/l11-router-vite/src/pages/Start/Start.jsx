import { NavLink, useNavigate } from "react-router-dom"
export const Start = () =>{

    const navigate = useNavigate()
    return(
        <section>
            <h2>Start</h2>
            <button className="nav-button" onClick={() => navigate("/places")}>Go Places</button>

        </section>
    )
}