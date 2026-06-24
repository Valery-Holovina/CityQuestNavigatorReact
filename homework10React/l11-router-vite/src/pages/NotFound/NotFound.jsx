import { NavLink } from "react-router-dom"

export const NotFound = () =>{
    return(
        <section>
            <h2>Not Found</h2>
            <NavLink to="/">Go Home</NavLink>
        </section>
    )
}