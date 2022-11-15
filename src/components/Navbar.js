import React from "react";


export default function Navbar(props){

    return (
        <div className='navbar-container close' >
            <nav className={props.open ? "nav-links open" : "nav-links close"}>
                <a className="nav-link-item" href="/">
                    <h2 className="nav-link-title">Home</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                <a className="nav-link-item" href="/projects">
                    <h2 className="nav-link-title">Projects</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                <a className="nav-link-item" href="/about">
                    <h2 className="nav-link-title">About Me</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                <a className="nav-link-item" href="/contact">
                    <h2 className="nav-link-title">Contact Me</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
            </nav>
        </div>
    )
}