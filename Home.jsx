import React from "react";
import Herosection from "./Herosection";
import "./Home.css";
import Moviecard from "./Moviecard";
function Home(){
    return(
<div className="home-container">
    <Herosection/>
    <Moviecard/>
        </div>
    )
}
export default Home