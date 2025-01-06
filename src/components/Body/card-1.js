import React from "react";
import Button3 from "../Button/Button-3";
import "./card-1.css";

function Card1({ imageSrc, title, description }) {
    return (
        <figure className="card">
            <img src={imageSrc} alt={title} className="card-image" />
            <h4 className="card-title">{title}</h4>
            <p className="card-description">{description}</p>
            {/* <Button3 /> */}
        </figure>
    );
}

export default Card1;
