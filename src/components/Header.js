import React from "react";
import './Header.css';

function Header() {
    return (
       <headerwrapper >
            <logo className="logo" href="/">Prey Portfolio</logo>
            <nav className="navbar">
                <navitem className="navitem" href = "/">Home</navitem>
                <navitem className="navitem" href = "/about">About</navitem>
                <navitem className="navitem" href = "/projects">Projects</navitem>
                <navitem className="navitem" href = "/resume">Resume</navitem>
            </nav>
       </headerwrapper>
    )
}

export default Header;