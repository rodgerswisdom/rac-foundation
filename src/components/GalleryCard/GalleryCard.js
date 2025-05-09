import React, { useState } from 'react';
import './GalleryCard.css'; // Make sure this is created or imported correctly

const GalleryCard = ({ image, alt, category }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${alt}`);
    setImageError(true);
  };

  return (
    <div className="gallery-card">
      {!imageLoaded && !imageError && (
        <div className="image-placeholder"></div>
      )}
      
      {imageError ? (
        <div className="image-error">
          <span>Image not available</span>
        </div>
      ) : (
        <img
          src={image}
          alt={alt || 'Gallery image'}
          className={`gallery-card-image ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}
      
      <div className="gallery-card-overlay">
        <div className="gallery-card-category">{category}</div>
        <h3 className="gallery-card-title">{alt}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;