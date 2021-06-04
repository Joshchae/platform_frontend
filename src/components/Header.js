import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css'

function Header() {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="/about">About Us</NavLink>
                <br />
                <NavLink to="/ClimateMigration">Climate-induced Migration</NavLink>
                <br />
                <NavLink to="/Conflicts">Conflicts</NavLink>
                <br />
                <NavLink to="/Conflicts2">Conflicts2</NavLink>
                <br />
            </nav>
        </div>
    )
}

export default Header
