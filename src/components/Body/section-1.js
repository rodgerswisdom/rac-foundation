import React from 'react';
import Button3 from "../Button/Button-3";
import "./Body.css";
import "./section.css";

function Section1({ title, imageSrc, textContent }) {
    return (
    //     <div className="content-1">
    //     <h1 className="h1-title"><b>{title}</b></h1>
    //     <div className="body-content">
    //         <div className="image-container">
    //             <img src={imageSrc} alt="section-image" className="journey-image-1" />
    //         </div>
    //         <div className="text-content">
    //             {textContent}
    //             <Button3 />
    //         </div>
    //     </div>
    // </div>

    <div className=" content-1">
    <h1 className="h1-title"><b>{title}</b></h1>
    <div className="section-body">
        <div className="image-container">
            <img src={imageSrc} alt="section-image" className="section-image" />
        </div>
        <div className="text-content">
            {textContent}
            {/* <Button3 /> */}
        </div>
    </div>
</div>
    );
}

export default Section1;

