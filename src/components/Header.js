import React from "react";
import './Header.css';

function Header() {
    return (
       <headerwrapper >
            <nav className="navbar">
                <navitem className="navitem" href = "/">Home</navitem>
                <navitem className="navitem" href = "/resume">Resume</navitem>
                <navitem className="navitem" href = "/projects">Projects</navitem>
            </nav>
       </headerwrapper>
    )
}

export default Header;