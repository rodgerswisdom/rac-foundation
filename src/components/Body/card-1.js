import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import "./card-1.css";

function Card1({ imageSrc, title, description }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        initialInView: true
    });

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    return (
        <figure 
            ref={ref}
            className={`card ${inView ? 'fade-in' : ''}`}
            role="article"
            aria-label={`${title} - ${description.substring(0, 50)}...`}
        >
            <div className="card-image-container">
                {!imageLoaded && (
                    <div className="image-skeleton" aria-hidden="true" />
                )}
                <img 
                    src={imageSrc} 
                    alt={title}
                    className={`card-image ${imageLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
                {imageError && (
                    <div className="image-error" role="alert">
                        <span>Failed to load image</span>
                    </div>
                )}
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </figure>
    );
}

export default Card1;
