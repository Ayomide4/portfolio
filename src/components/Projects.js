import React from "react";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="page-container">
            <div className="project-container">
                <p className="page-title">PROJECTS.</p>
                <div className="project-items-container">
                    <div className="project-item"></div>
                    <div className="project-item"></div>
                    <div className="project-item"></div>
                    <div className="project-item"></div>
                </div>
                <DarkMode/>
                <Navbar/>
            </div>
        </div>
    )
}

export default Projects