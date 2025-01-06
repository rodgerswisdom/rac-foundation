import React, { useState } from 'react';
import G1 from '../../assets/images/G1.jpeg';
import G2 from '../../assets/images/G2.jpeg';
import G3 from '../../assets/images/G3.jpeg';
import G4 from '../../assets/images/G4.jpeg';
import G5 from '../../assets/images/G5.jpeg';
import G6 from '../../assets/images/G6.jpeg';
import G7 from '../../assets/images/G7.jpeg';
import G8 from '../../assets/images/G8.jpeg';
import G9 from '../../assets/images/G9.jpeg';
import G10 from '../../assets/images/G10.jpeg';
import G11 from '../../assets/images/G11.jpeg';
import G12 from '../../assets/images/G12.jpeg';
// import G13 from '../../assets/images/G13.jpeg';
import G14 from '../../assets/images/G14.jpeg';
import G15 from '../../assets/images/G15.jpeg';
import G16 from '../../assets/images/G16.jpeg';
import G17 from '../../assets/images/G17.jpeg';
import G18 from '../../assets/images/G18.jpeg';
import G19 from '../../assets/images/G19.jpeg';
import G20 from '../../assets/images/G20.jpeg';
import G21 from '../../assets/images/G21.jpeg';
import G22 from '../../assets/images/G22.jpeg';
import G23 from '../../assets/images/G23.jpeg';
import G24 from '../../assets/images/G24.jpeg';
import G25 from '../../assets/images/G25.jpeg';
import G26 from '../../assets/images/G26.jpeg';
import G27 from '../../assets/images/G27.jpeg';
// import G3 from '../../assets/images/G3.jpeg';
import './Gallery.css';

const images = [
    G1,
    G2,
    G3,
    G4,
    G5,
    G6,
    G7,
    G8,
    G9,
    G10,
    G11,
    G12,
    // G13,
    G14,
    G15,
    G16,
    G17,
    G18,
    G19,
    G20,
    G21,
    G22,
    G23,
    G24,
    G25,
    G26,
    G27,
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseClick = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index}`}
                    className="gallery-image"
                    onClick={() => handleImageClick(image)}
                />
            ))}

            {selectedImage && (
                <div className="modal" onClick={handleCloseClick}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={selectedImage} alt="Expanded" />
                </div>
            )}
        </div>
    );
};

export default Gallery;