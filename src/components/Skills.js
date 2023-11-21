import React from "react";
import {useEffect, useRef, useState, useMemo} from 'react';
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5"
import { SiJira } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { PiGraph } from "react-icons/pi";
import { FaDatabase } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";

import "./Skills.css"

function Skills() {
    const refPython = useRef(null);
    const refJava = useRef(null);
    const refJavaScript = useRef(null);
    const refSql = useRef(null);

    const isInViewportPython = useIsInViewport(refPython);
    const isInViewportJava = useIsInViewport(refJava);
    const isInViewportJavaScript = useIsInViewport(refJavaScript);
    const isInViewportSql = useIsInViewport(refSql);

    function useIsInViewport(ref) {
        const [isIntersecting, setIsIntersecting] = useState(false);

        const observer = useMemo(
            () => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)),
            []
        );

        useEffect(() => {
            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
        }, [ref, observer]);

        return isIntersecting;
    }

    return (
        <div className="skill-container">
            <p className="title">SKILLS</p>
            <p className="line1">___________________________________________________________________________________________</p>
            <div className="skill-box">
                {renderSkill("Python", FaPython, refPython, isInViewportPython, 95)}
                {renderSkill("Java", FaJava, refJava, isInViewportJava, 85)}
                {renderSkill("JavaScript", IoLogoJavascript, refJavaScript, isInViewportJavaScript, 75)}
                {renderSkill("SQL", BsFiletypeSql, refSql, isInViewportSql, 75)}
            </div>
            <p className="line">___________________________________________________________________________________________</p>
            <div className="multiskill">
                {renderMultiSkill("Python", FaPython)}
                {renderMultiSkill("Java", FaJava)}
                {renderMultiSkill("JavaScript", IoLogoJavascript)}
                {renderMultiSkill("SQL", BsFiletypeSql)}
                {renderMultiSkill("ReactJS", FaReact)}
                {renderMultiSkill("NodeJS", FaNodeJs)}
                {renderMultiSkill("HTML", FaHtml5)}
                {renderMultiSkill("CSS", FaCss3Alt)}

                {renderMultiSkill("AWS", FaAws)}
                {renderMultiSkill("Jenkins", FaJenkins)}
                {renderMultiSkill("Postman", SiPostman)}
                {renderMultiSkill("Git", FaGitAlt)}
                {renderMultiSkill("GitHub", FaGithub)}
                {renderMultiSkill("Agile Methodology", IoPeopleSharp)}
                {renderMultiSkill("Jira", SiJira)}
                {renderMultiSkill("Restful APIs", FaTools)}

                {renderMultiSkill("Test Driven Development", FaBug)}
                {renderMultiSkill("Object Orientated", PiGraph)}

                {renderMultiSkill("Data Structure", FaDatabase)}
                {renderMultiSkill("Algorithms", SiThealgorithms)}
            </div>
        </div>
    );
}

function renderMultiSkill(skillName, Icon) {
    return (
        <div className="multiskill-inner-box">
            <div className="skill-icon">
                <Icon size={35}/>
            </div>
            <div className="multiskill-name">
                <p>{skillName}</p> 
            </div>
        </div>
    )
}

function renderSkill(skillName, Icon, ref, isInViewport, percentage) {
    const barStyle = {
        width: isInViewport ? `${percentage}%` : '0%',
    };

    return (
        <div className="skill-inner-box" key={skillName}>
            <div className="skill-lang">{skillName}</div>
            <div className="skill">
                <div className="bar-container">
                    <div ref={ref} className="bar" style={barStyle}>
                        <div className='percent-text'><Icon/>{percentage}%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;