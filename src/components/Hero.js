import React from "react";
import { useEffect, useRef } from 'react';
import './Hero.css';
import { TypeAnimation } from "react-type-animation";
import personalPic from "../assets/prey_personal.jpg"
import outdoorPic from "../assets/prey_outdoor.jpg"
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Hero() {
    return (
        <div>
            <div className="profile" id="home">
                <img src = {outdoorPic} className = "background-photo"></img>
                <div className="overlay">
                    <h1>Prey Patel</h1>
                    <div>
                        <TypeAnimation className="interest"
                            sequence={[
                                'Developer👨🏽‍💻',
                                1000,
                                'Basketball Head🏀',
                                1000,
                                'Traveler✈️',
                                1000,
                                'Music Fan🎵',
                                1000,
                                'Gamer🎮',
                                1000,
                                'Outdoors Adventurer🏞️',
                                1000
                            ]}
                            wrapper="span"
                            speed={35}
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
            <div className="about-me">
                <img src = {personalPic} className = "profile-pic"></img>
                <div className="me">
                    <p className="hello">Hello.</p>
                    <p className="name">My name is Prey </p>
                    <p className="textP">I am a Software Engineering Student at Western University.</p>
                    <p className="textP">I am passionate about back-end development and driven to make a 
                        meaningful impact through technology.</p>
                    <div className="social">
                        <a href='https://www.linkedin.com/in/preyrpatel/' className="social-link">
                            <IconContext.Provider value={{color: "black", className: "contactIcon"}}>
                                <FaLinkedin size={35}/>
                            </IconContext.Provider>
                        </a>
                        <a href='mailto:preypatel612@gmail.com' className="social-link">
                            <IconContext.Provider value={{color: "black", className: "contactIcon"}}>
                                <MdEmail size={35}/>
                            </IconContext.Provider>
                        </a>
                        <a href='https://github.com/PreyPatell' className="social-link">
                            <IconContext.Provider value={{color: "black", className: "contactIcon"}}>
                            <FaGithub size={35}/>
                            </IconContext.Provider>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;