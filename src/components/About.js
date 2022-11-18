import React from "react";
import DarkMode from "./DarkMode";
import Navbar from "./Navbar";

export default function About(){
    return (
        <div className="page-container">
            <div className=" about-container toggle-container">
                <div>
                    <p className="about-title page-title">ABOUT ME.</p>
                    <p className="about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="skills"></p>
                    <a className="blog-link" href="/#">Check out my blog</a>
                </div>
                <DarkMode/>
            </div> 
            <Navbar/>
        </div>
    )
}