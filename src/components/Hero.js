import React from "react";
import './Hero.css';
import { TypeAnimation } from "react-type-animation";
import personalPic from "../assets/prey_personal.jpg"
import outdoorPic from "../assets/prey_outdoor.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Hero() {
    return (
        <div>
            <img src = {personalPic} className = "photo"></img>
            <img src = {outdoorPic} className = "photo"></img>
            <div>
                <p>Hello</p>

                <p>My name is Prey</p>

                <p>I am a Software Engineering Student at Western University.</p>

                <p>I am passionate about back-end development and driven to make a 
                    meaningful impact through technology.</p>
            </div>
            <div>
                <p className="interest">I AM ...</p>
                <TypeAnimation className="interest"
                    sequence={[
                        'A Developer👨🏽‍💻',
                        1000,
                        'A Basketball Head🏀',
                        1000,
                        'A Traveler✈️',
                        1000,
                        'A Music Fan🎵',
                        1000,
                        'A Gamer🎮',
                        1000,
                        'An Outdoors Adventurer🏞️',
                        1000
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <div>
                <a href='https://www.linkedin.com/in/preyrpatel/' className="social-link">
                    <FaLinkedin size={35} color="black"/>
                </a>
                <a href='mailto:preypatel612@gmail.com' className="social-link">
                    <MdEmail size={35} color="black"/>
                </a>
                <a href='https://github.com/PreyPatell' className="social-link">
                    <FaGithub size={35} color="black"/>
                </a>
            </div>
        </div>
    )
}

export default Hero;