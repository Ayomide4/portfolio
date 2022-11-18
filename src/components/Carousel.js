import React, { useState } from "react";
import { SliderData } from "./SliderData";
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const Carousel = ({slides}) => {

    const [current, setCurrent] = useState(0);


    if(!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    const nextSlide = () => {
        setCurrent(current === slides.length-1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length-1 : current - 1)
    }
    

    return (
        <section className="slider">
            <FaArrowLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowRight className="right-arrow" onClick={nextSlide}/>
            
            {
                SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? "slider active" : "slide" } key={index}>
                            
                            {index === current && (<img src={slide.image} alt="" className="slider-image"/>)}
                        </div>
                    )
                })
            }
            <div className="container-dots">
                {Array.from({length:4}).map((item, index) => {
                    return <div className={current===index ? "dot active" : "dot"} key={index} ></div>
                })}
            </div>
    
        </section>
    )
}

export default Carousel