import React from "react";
import Navbar from "./Navbar"
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";




export default function Menu(){
    const [open, setOpen] = useState(false)
    

    const toggleNav = () => {
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
            <main className="menu-container close"></main>
            <button className="nav-toggle " type="button" onClick={toggleNav}>
                    {!open ? <i className="open" ><HiMenu/></i> : <></>}
                    {open ? <i className="close"><HiX/></i> : <></>}
            </button>
        </div>
    )
}