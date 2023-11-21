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
                    <a href="https://github.com/PreyPatell/TwitterSensitivityAnalysis">
                        <div className="project-img">
                            <img src={twitterAnalysis}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">Twitter Hashtag Sensitivity Analyzer</p>
                            <p className="project-category">Python</p>
                            <p className="project-text">Flask, Pandas, NumPy, Analytics, API</p>
                        </div>

                    </a>
                </div>
                <div className="project-box">
                    <a href="">
                        <div className="project-img">
                            <img src={iFinance}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">Finanace Management System</p>
                            <p className="project-category">Java, SQL</p>
                            <p className="project-text">Data Structures, Databases</p>
                        </div>

                    </a>
                </div>
                <div className="project-box">
                    <a href="https://github.com/PreyPatell/NBAPlayerComparison">
                        <div className="project-img">
                            <img src={nbaComparison}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">NBA Player Comparison</p>
                            <p className="project-category">Python, VueJS</p>
                            <p className="project-text">Flask, Pandas, NumPy, Algorithms</p>
                        </div>

                    </a>
                </div>
                <div className="project-box">
                    <a href="https://github.com/PreyPatell/AvatarGame">
                        <div className="project-img">
                            <img src={avatarGame}></img>
                        </div>
                        <div className="project-content">
                            <p className="project-title">Avatar Game</p>
                            <p className="project-category">Python</p>
                            <p className="project-text">PyGame, Object-Orientated Programming</p>
                        </div>

                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects

