import React from "react";
import Navbar from "./Navbar"
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";




export default function Menu(){
    const [open, setOpen] = useState(false)

    const toggleNav = () => {
        setOpen(open => !open)
        }

    return (
        <div className="menu-container">
            <button className="nav-toggle" type="button" onClick={toggleNav}>
                {!open ? <span className="open"><HiMenu/></span> : <div></div>}
                {open ? <span className="close"><HiX/></span> : <div></div>}
            </button>
        </div>
    )
}