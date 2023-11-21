import React from "react";
import './Experience.css'
import ibm from '../assets/ibm_logo.jpg'
import gfl from '../assets/gfl_logo.jpg'
import turnermoore from '../assets/turnermoore_logo.png'
import western from '../assets/western_logo.gif'

function Experience() {
    return (
        <div className="experience-container" id = "resume">
            <p className="title">EXPERIENCE</p>
            <p className="line">___________________________________________________________________________________________</p>
            <p className="title2">TECHNICAL. WORK.</p>
            <div className="experience-box">
                <div className="image-container">
                    <img src={ibm}  className="experience-image" />
                    <img src={gfl}  className="experience-image" />
                    <img src={western}  className="experience-image" />
                    <img src={turnermoore}  className="experience-image" />
                </div>
            </div>
        </div>
    )
}

export default Experience;