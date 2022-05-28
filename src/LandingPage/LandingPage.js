import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css'
const Landingpage = () => {
    return (
        <div className="Landingpage">
            <div className="img">
                <img src="https://wallpaperaccess.com/full/2083830.jpg" alt="Cover" />
            </div>
            <div className="conatiner">
                <h1>
                    10x Team 04
                </h1>
                <Link to = "/Postview">
                <button id="btn">
                    Enter
                </button>
                </Link>
                
            </div>
        </div>
    );
};
export default Landingpage;