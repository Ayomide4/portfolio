import React from "react";
import Navbar from "./Navbar"
import { useState } from "react";
import DarkMode from "./DarkMode"



export default function Menu(){
    const [open, setOpen] = useState(false)


    




    return (
        <div>
            <main className="menu-container close light">
                <p className="title">AYOMIDE OMOTOSHO</p>
                <p className="subtitle">Full Stack Developer</p>
                <p className="location">Based in Dallas, TX</p>
                <p className="side-title">Dedicated to developoing exceptional digital experiences</p>
                <img className="portrait" src="https://images.pexels.com/photos/3692600/pexels-photo-3692600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ayomide Omotosho"></img>
                <DarkMode/>
            </main>
            {/* <button className="nav-toggle " type="button" onClick={toggleMenu}>
                    {!open ? <i className="open" ><HiMenu/></i> : <></>}
                    {open ? <i className="close"><HiX/></i> : <></>}
            </button> */}
            
            <Navbar/>
        </div>
    )
}