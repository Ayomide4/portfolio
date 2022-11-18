import React from "react";
import Navbar from "./Navbar"

import DarkMode from "./DarkMode"



export default function Menu(){


    return (
        <div>
            <main className="menu-container toggle-container close light">
                <p className="title">AYOMIDE OMOTOSHO</p>
                <p className="subtitle">Full Stack Developer</p>
                <p className="location">Based in Dallas, TX</p>
                <p className="side-title">Dedicated to developoing exceptional digital experiences</p>
                <img className="portrait" src="https://images.pexels.com/photos/3692600/pexels-photo-3692600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ayomide Omotosho"></img>
                <DarkMode/>
            </main>   
            <Navbar/>
        </div>
    )
}