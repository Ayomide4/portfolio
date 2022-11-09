import React, { useState, useEffect } from "react";

export default function Navbar(props){
    // useEffect(() => {
    //     const navElement = document.querySelector("")
    //     console.log(navElement)
        
    // }, [props.open])

    // const [toggle, setToggle] = useState(false)

    // const toggleNav = () => {
    //     setToggle(toggle => !toggle)
    //     const navElement = document.querySelector("navbar-container")
    //     console.log(navElement)
    // }

    function loading (props) {
        if(props.open){
            const navElement = document.querySelector('close')
            console.log('navElement')
        }
    }
    

    return (
        <div className='navbar-container close' onLoad={loading}>
            <nav className="nav-links">
                <a className="nav-link-item" href="/#">
                    <h2>Home</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                <a className="nav-link-item" href="/#">
                    <h2>Projects</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                <a className="nav-link-item" href="/#">
                    <h2>About Me</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                <a className="nav-link-item" href="/#">
                    <h2>Contact Me</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
            </nav>
        </div>
    )
}