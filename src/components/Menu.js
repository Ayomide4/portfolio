import React from "react";
import Navbar from "./Navbar"
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";




export default function Menu(){
    const [open, setOpen] = useState(false)
    

    const toggleMenu = () => {
        setOpen(open => !open)

        const menuElement = document.querySelector(".menu-container") //we create the var here so we can store the element after its created


        if(open){
            menuElement.classList.add("close")
            menuElement.classList.remove("open")
        }
        else{
            
            menuElement.classList.add("open")
            menuElement.classList.remove("close")
        }

    }

    return (

        <div>
            
            <main className="menu-container close">
                <p className="title">AYOMIDE OMOTOSHO</p>
                <p className="subtitle">Full Stack Developer</p>
                <p className="location">Based in Dallas, TX</p>
                <p className="side-title">Dedicated to making exceptional digital experiences</p>
                <img className="portrait" src="https://images.pexels.com/photos/3692600/pexels-photo-3692600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Ayomide Omotosho"></img>
            
            </main>
            <button className="nav-toggle " type="button" onClick={toggleMenu}>
                    {!open ? <i className="open" ><HiMenu/></i> : <></>}
                    {open ? <i className="close"><HiX/></i> : <></>}
            </button>
            
            <Navbar open={open} toggleMenu={() => toggleMenu}/>

        </div>
    )
}