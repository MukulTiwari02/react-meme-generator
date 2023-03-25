import React from "react";
import LOGO from "../Images/Logo.png"

export default function Navbar (){
    return (
        <nav className = "navbar">
            <img src={LOGO} alt="Meme Logo" />
            <h2 id="nav-text">Meme Generator</h2>
            <h2 id="project-head">React-Project</h2>
        </nav>
    )
}