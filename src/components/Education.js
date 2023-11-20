import React from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import "./Education.css"


function Education() {
    return (
    <div className="education">
        <p className="title">EDUCATION</p>
        <div className="education-grid">
            <div className='education-container'>
                <div className='education-box'>
                    <p className='education-subtitle'>
                        <IoSchoolSharp/>
                        &nbsp; Western University</p>
                    <p className='education-info'>
                        Bachelor of Engineering Science,
                        Software Engineering <br></br>
                        Deans Honor List with 3.7 GPA
                    </p>
                </div>
            </div>
            <div className='education-container'>
                <div className='study'>
                    <p className='education-subtitle'>
                        <FaBookOpen/>
                        &nbsp; Key Area Of Study</p>
                    <p className='class-list'>
                        <ul>
                            <li> Data Structure & Algorithms</li>
                            <li> Database Management Systems</li>
                            <li> Web Technologies</li>
                            <li> Software Requirements and Analysis</li>
                            <li> Software Construction</li>
                            <li> Software Design</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Education;