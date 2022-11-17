import React from "react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

export default function Navbar(){

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
            <button className="nav-toggle " type="button" onClick={toggleMenu}>
                    {!open ? <i className="open" ><HiMenu/></i> : <></>}
                    {open ? <i className="close"><HiX/></i> : <></>}
            </button>
            <div className='navbar-container close' >
                <nav className={open ? "nav-links open" : "nav-links close"}>
                    <a className="nav-link-item" href="/">
                        <h2 className="nav-link-title">Home</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                    <a className="nav-link-item" href="/projects">
                        <h2 className="nav-link-title">Projects</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                    <a className="nav-link-item" href="/about">
                        <h2 className="nav-link-title">About</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                    <a className="nav-link-item" href="/contact">
                        <h2 className="nav-link-title">Contact</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                </nav>
            </div>
        </div>
    )
}