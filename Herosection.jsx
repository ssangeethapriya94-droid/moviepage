import React from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { FaPlay, FaPlus } from "react-icons/fa";
import "./Herosection.css";
import jura from "../assets/jura.mp4";

function Herosection(){
    return(
    
<div  className="hero-container">
    <video autoPlay loop muted playsInline className="hero-video"> <source src={jura}  type="video/mp4"/>
    </video>
    <div className="hero-overlay">
        <h1 className="hero-title">THE JURASSIC WORLD</h1>
        <p className="hero-description">Jurassic World is about a theme park where genetically created dinosaurs are kept as attractions. </p>
        <div  className="hero-btn">
            <button className="watc-btn">
                <FaPlay className="play-icons"/><span>Watch Now</span>

            </button>
            <button className="add-btn">
                <FaPlus/>
            </button>
        </div>
       <div/>
    </div></div>
        
    )
}
export default Herosection