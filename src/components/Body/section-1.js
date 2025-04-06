import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "./section.css";

const Section1 = ({ title, imageSrc, textContent }) => {
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
        console.error('Error loading image:', imageSrc);
    };

    // Safely extract text for the overlay
    const getTextForOverlay = () => {
        if (!textContent) return '';
        
        // If textContent is a string, return the first sentence
        if (typeof textContent === 'string') {
            const firstSentence = textContent.split('.')[0];
            return firstSentence ? firstSentence + '.' : '';
        }
        
        // If textContent is a React element, try to extract text from it
        if (React.isValidElement(textContent)) {
            // Try to find the first paragraph or text node
            const children = textContent.props?.children;
            
            if (Array.isArray(children)) {
                // Look for the first paragraph or text content
                for (const child of children) {
                    if (React.isValidElement(child) && child.type === 'p') {
                        const paragraphText = child.props?.children;
                        if (typeof paragraphText === 'string') {
                            const firstSentence = paragraphText.split('.')[0];
                            return firstSentence ? firstSentence + '.' : '';
                        }
                    }
                }
            } else if (typeof children === 'string') {
                const firstSentence = children.split('.')[0];
                return firstSentence ? firstSentence + '.' : '';
            }
        }
        
        return '';
    };

    const textForOverlay = getTextForOverlay();

    return (
        <div ref={ref} className={`section ${inView ? 'fade-in' : ''}`}>
            <div className="section-container">
                <div className="section-content">
                    <h2 className="section-title">{title}</h2>
                    <div className="text-content">
                        {textContent}
                    </div>
                </div>
                <div className="image-wrapper">
                    <div className="image-container">
                        {!imageLoaded && !imageError && (
                            <div className="image-skeleton" aria-hidden="true" />
                        )}
                        <img 
                            src={imageSrc} 
                            alt={title} 
                            className={`section-image ${imageLoaded ? 'loaded' : ''}`}
                            loading="lazy"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                        {textForOverlay && (
                            <div className="image-overlay">
                                <p>{textForOverlay}</p>
                            </div>
                        )}
                        <div className="image-decoration"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;

