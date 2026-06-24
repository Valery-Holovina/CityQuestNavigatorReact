import { NavLink, Outlet, useNavigate } from "react-router-dom"

export const Places = () =>{

    const navigate = useNavigate()
    return(
        <section>
            <h2>Places</h2>
            <button className="nav-button" onClick={() => navigate("/")}>Go Home</button>
            <button className="nav-button" onClick={() => navigate("/about")} style={{margin: "8px"}}>Go About</button>
            <div>
                <NavLink to="history" style={{padding: "8px"}}>History</NavLink>
                <NavLink to="food" style={{padding: "8px"}}>Food</NavLink>
                <NavLink to="nature" style={{padding: "8px"}}>Nature</NavLink>
            </div>
            <hr></hr>
        <Outlet />
        </section>
    )
}