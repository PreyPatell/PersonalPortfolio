import React from "react";
import "./Projects.css"
import avatarGame from "../assets/avatar_project.png"
import iFinance from "../assets/finance_project.png"
import nbaComparison from "../assets/nba_project.png"
import twitterAnalysis from "../assets/twitter_cohere_project.jpg"

function Projects() {
    return (
        <div className="project">
            <p className="title">PROJECTS</p>
            <p className="line">___________________________________________________________________________________________</p>
            <div className="project-container">
                <div className="project-box">
                    <a href="https://github.com/PreyPatell/TwitterSensitivityAnalysis" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-img">
                            <img src={twitterAnalysis}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">Twitter Hashtag Sensitivity Analyzer</p>
                            <p className="project-text">
                                <span className="project-category">Python</span>
                                <span>/</span>
                                <span>Flask, Pandas, NumPy, Analytics, API</span>
                            </p>
                        </div>

                    </a>
                </div>
                <div className="project-box">
                    <a href="" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-img">
                            <img src={iFinance}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">Finanace Management System</p>
                            <p className="project-text">
                                <span className="project-category">Java, SQL</span>
                                <span>/</span>
                                <span>Data Structures, Databases</span>
                            </p>
    
                        </div>

                    </a>
                </div>
                <div className="project-box">
                    <a href="https://github.com/PreyPatell/NBAPlayerComparison" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-img">
                            <img src={nbaComparison}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">NBA Player Comparison</p>
                            <p className="project-text">
                                <span className="project-category">Python, VueJS</span>
                                <span>/</span>
                                <span>Flask, Pandas, NumPy, Algorithms</span>
                            </p>
                        </div>

                    </a>
                </div>
                <div className="project-box">
                    <a href="https://github.com/PreyPatell/AvatarGame" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="project-img">
                            <img src={avatarGame}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">Avatar Game</p>
                            <p className="project-text">
                                <span className="project-category">Python</span>
                                <span>/</span>
                                <span>PyGame, Object-Orientated Programming</span>
                            </p>
                        </div>

                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects

