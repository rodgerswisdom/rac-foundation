import React from "react";
import { Link } from "react-router-dom";
import "./Foundation.css";
import bgImage from "../../assets/background.jpg";

function Foundation() {
    return (
        <div className="foundation-cont">
            <img src={bgImage} alt="Background" className="background-image" />
            <div className="overlay"></div> {/* Overlay element */}
            <div className="content">
                <h1 className="foundation">Raise a Child Foundation</h1>
                <p className="p-text">Aid a child, improve the community</p>
                <div className="btn-container">
                    <Link to="/about-us" className="cta-button learn-more">
                        <span>Learn More</span>
                    </Link>
                    {/* <Link to="/donate" className="cta-button donate">
                        <span>Donate</span>
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Foundation;
