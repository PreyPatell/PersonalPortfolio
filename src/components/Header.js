import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Header.css';

function Header() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <header className="sticky-header">
            <nav className="navbar">
                <Link
                    className="navitem"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Home
                </Link>
                <Link
                    className="navitem"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Resume
                </Link>
                <Link
                    className="navitem"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Projects
                </Link>
            </nav>
        </header>
    );
}

export default Header;