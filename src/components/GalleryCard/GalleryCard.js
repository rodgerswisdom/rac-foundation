import React, { useState } from 'react';
import './GalleryCard.css';

const GalleryCard = ({ image, alt, category }) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        console.error(`Failed to load image: ${image}`);
        setImageError(true);
    };

    return (
        <div className="gallery-card">
            <div className="image-container">
                {!imageError ? (
                    <img
                        src={image}
                        alt={alt}
                        className="gallery-image"
                        loading="lazy"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="image-error">
                        <span>Image not available</span>
                    </div>
                )}
                <div className="overlay">
                    <span className="category">{category}</span>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard; 