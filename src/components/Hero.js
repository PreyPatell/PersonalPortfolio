import React from "react";
import './Hero.css';
import { TypeAnimation } from "react-type-animation";


function Hero() {
    
    return (
        <div>
            <img></img>
            <div>
                <p>Hello</p>
                
                <p>My name is Prey</p>

                <p>I am a Software Engineering Student at Western University.</p>

                <p>I am passionate about back-end development and driven to make a 
                    meaningful impact through technology.</p>


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
        </div>
    )
}

export default Hero;