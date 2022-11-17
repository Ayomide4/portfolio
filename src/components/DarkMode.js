import React from "react";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";



const DarkMode = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const elements = document.getElementsByClassName('menu-container')

    const toggleDarkMode = (checked, e) => {
        setDarkMode(checked)
        if (!isDarkMode)
            elements[0].classList.replace('light', 'dark')
        else
            elements[0].classList.replace('dark', 'light')
        console.log(elements)
    }

    return (
        <div>
            <DarkModeSwitch className="dark-mode" checked={isDarkMode} onChange={toggleDarkMode} size={35}/>
        </div>
    )
}

export default DarkMode;