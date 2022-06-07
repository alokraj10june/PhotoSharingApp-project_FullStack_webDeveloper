import React from 'react';
import { Link } from "react-router-dom";
import './LandingPage.css'
const Landingpage = () => {
    return (
        <div className="Landingpage">
            <div className="img">
                <img src="https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1600047009.jpg" alt="Cover" />
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