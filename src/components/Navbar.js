import React from "react";

export default function Navbar(props){

    return (
        <div className='nav-container close' >
            <nav className={props.open ? "nav-links open" : "nav-links close"}>
                <div className="nav-item">
                    <a href="/#">
                        <h2 className="nav-item-title">Home</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                </div>
                <div className="nav-item">
                    <a className="nav-link-item" href="/#">
                        <h2 className="nav-item-title">Projects</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                </div>
                <div className="nav-item">
                    <a className="nav-link-item" href="/#">
                        <h2 className="nav-item-title">About Me</h2>
                        <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </a>
                </div>
                <div className="nav-item">
                <a className="nav-link-item" href="/#">
                    <h2 className="nav-item-title">Contact Me</h2>
                    <img className="nav-link-img" src="https://images.pexels.com/photos/14344661/pexels-photo-14344661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                </a>
                </div>
            </nav>
        </div>
    )
}