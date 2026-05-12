import React from "react";
import { FaFilm, FaHome, FaSearch, FaTv, FaUserCircle } from "react-icons/fa";
import hotstar from "../assets/hotstar.jpg"
import "./Sidebar.css"
function Sidebar(){
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={hotstar} alt="Hotstar" height={80} width={80} />
            </div>
            <nav className="nav-icons">
                <FaUserCircle className="icon" title="My space"/>
                <FaSearch className="icon" title="search"/>
                <FaHome className="icon" title="home"/>
                <FaTv className="icon" title="TV"/>
            <FaFilm className="icon" title="flim"/>
            </nav>
            
            </div>


    
    )
}
export default Sidebar