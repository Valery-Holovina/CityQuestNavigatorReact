import { NavLink, Outlet } from 'react-router-dom'
import './MainLayout.css'

export const MainLayout = () =>{
    return(
        <div>
            <h1>CityQuest Navigator</h1>

            <nav className="main-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/quests">Quests</NavLink>
                <NavLink to="/places">Places</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/start">Start</NavLink>

            </nav>

            <main className='page-content'>
                <Outlet />
            </main>
        </div>
    )
}