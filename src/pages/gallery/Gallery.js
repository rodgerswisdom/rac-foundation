import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import SEO from '../../components/SEO/SEO';
import './Gallery.css'; // Make sure this import is not commented out

// Import all available images
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
import H1 from '../../assets/images/H18.55.jpeg';
import H2 from '../../assets/images/H18.56.jpeg';
import H3 from '../../assets/images/H18.57.jpeg';
import H4 from '../../assets/images/H18.58.jpeg';
import H5 from '../../assets/images/H18.59.jpeg';

// Organize images by category with error handling
const imageCategories = {
    education: [
        { image: G1, category: 'Education', title: 'Education Initiative 1' },
        { image: G2, category: 'Education', title: 'Education Initiative 2' },
        { image: G3, category: 'Education', title: 'Education Initiative 3' },
        { image: G4, category: 'Education', title: 'Education Initiative 4' },
        { image: G5, category: 'Education', title: 'Education Initiative 5' },
        { image: H1, category: 'Education', title: 'Education Initiative 6' },
        { image: H2, category: 'Education', title: 'Education Initiative 7' },
        { image: H3, category: 'Education', title: 'Education Initiative 8' },
        { image: H4, category: 'Education', title: 'Education Initiative 9' },
        { image: H5, category: 'Education', title: 'Education Initiative 10' }
    ],
    health: [
        { image: G6, category: 'Health', title: 'Health Program 1' },
        { image: G7, category: 'Health', title: 'Health Program 2' },
        { image: G8, category: 'Health', title: 'Health Program 3' },
        { image: G9, category: 'Health', title: 'Health Program 4' },
        { image: G10, category: 'Health', title: 'Health Program 5' }
    ],
    community: [
        { image: G11, category: 'Community', title: 'Community Event 1' },
        { image: G12, category: 'Community', title: 'Community Event 2' },
        { image: G14, category: 'Community', title: 'Community Event 3' },
        { image: G15, category: 'Community', title: 'Community Event 4' },
        { image: G16, category: 'Community', title: 'Community Event 5' }
    ],
    events: [
        { image: G17, category: 'Events', title: 'Special Event 1' },
        { image: G18, category: 'Events', title: 'Special Event 2' },
        { image: G19, category: 'Events', title: 'Special Event 3' },
        { image: G20, category: 'Events', title: 'Special Event 4' },
        { image: G21, category: 'Events', title: 'Special Event 5' }
    ],
    other: [
        { image: G22, category: 'Other', title: 'Other Activity 1' },
        { image: G23, category: 'Other', title: 'Other Activity 2' },
        { image: G24, category: 'Other', title: 'Other Activity 3' },
        { image: G25, category: 'Other', title: 'Other Activity 4' },
        { image: G26, category: 'Other', title: 'Other Activity 5' },
        { image: G27, category: 'Other', title: 'Other Activity 6' }
    ]
};

// Flatten for initial display
const allImages = Object.values(imageCategories).flat();

const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [filteredImages, setFilteredImages] = useState(allImages);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        initialInView: false // Changed to false to ensure animation works
    });

    // Handle image loading
    useEffect(() => {
        const loadImages = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // Preload images
                const imagePromises = allImages.map(item => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.src = item.image;
                        img.onload = resolve;
                        img.onerror = () => reject(new Error(`Failed to load image: ${item.image}`));
                    });
                });

                await Promise.all(imagePromises).catch(err => {
                    console.warn('Some images failed to preload, but we will continue:', err);
                    // We don't fail completely here, just log the warning
                });
                
                // Simulate minimum loading time for better UX
                await new Promise(resolve => setTimeout(resolve, 500));
                setIsLoading(false);
            } catch (err) {
                console.error('Error loading images:', err);
                setError('Some images failed to load. Please try refreshing the page.');
                setIsLoading(false);
            }
        };
        
        loadImages();
    }, []);

    // Filter images when category changes
    useEffect(() => {
        if (activeCategory === 'all') {
            setFilteredImages(allImages);
        } else {
            setFilteredImages(imageCategories[activeCategory] || []);
        }
    }, [activeCategory]);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    // Force the section to be visible after a short delay if inView doesn't trigger
    useEffect(() => {
        const timer = setTimeout(() => {
            const section = document.querySelector('.gallery-section');
            if (section && !section.classList.contains('fade-in')) {
                section.classList.add('fade-in');
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SEO 
                title="Photo Gallery"
                description="Explore our photo gallery showcasing RAC Foundation's impact through education, health, community development, and special events. See the faces and stories behind our mission."
                keywords="RAC Foundation gallery, community photos, education initiatives, health programs, community events, Kenya development, NGO photos"
                ogImage={G1}
                ogUrl={window.location.href}
                canonicalUrl={window.location.href}
            />
            <section className={`gallery-section ${inView ? 'fade-in' : ''}`} ref={ref}>
                <div className="gallery-header">
                    <h1 className="gallery-title">Our Gallery</h1>
                    <p className="gallery-subtitle">
                        Capturing moments of impact and change in our community
                    </p>
                    
                    <div className="filter-buttons">
                        <button 
                            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('all')}
                            aria-label="Show all images"
                        >
                            All Images
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'education' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('education')}
                            aria-label="Filter by education"
                        >
                            Education
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'health' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('health')}
                            aria-label="Filter by health"
                        >
                            Health
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'community' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('community')}
                            aria-label="Filter by community"
                        >
                            Community
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'events' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('events')}
                            aria-label="Filter by events"
                        >
                            Events
                        </button>
                        <button 
                            className={`filter-btn ${activeCategory === 'other' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('other')}
                            aria-label="Filter by other"
                        >
                            Other
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <div className="gallery-container">
                    {isLoading ? (
                        <div className="loading-skeleton">
                            {[...Array(12)].map((_, index) => (
                                <div key={index} className="skeleton-item"></div>
                            ))}
                        </div>
                    ) : (
                        filteredImages.map((item, index) => (
                            <GalleryCard
                                key={index}
                                image={item.image}
                                alt={item.title}
                                category={item.category}
                            />
                        ))
                    )}
                </div>
            </section>
        </>
    );
};

export default Gallery;