import React from "react";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import { SliderData } from "./SliderData";

const Projects = () => {
    return (
        <div className="page-container">
            <div className="project-container toggle-container ">
                <p className="page-title">PROJECTS.</p> 
                <Carousel slides={SliderData}/>
                {/* <div className="project-items-container">
                    <div className="project-item"></div>
                    <div className="project-item"></div>
                    <div className="project-item"></div>
                    <div className="project-item"></div>
                </div> */}
            <DarkMode/>
            </div>
            <Navbar/>
        </div>
    )
}

export default Projects