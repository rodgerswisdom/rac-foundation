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
import H6 from '../../assets/images/H6.jpeg';
import H7 from '../../assets/images/H7.jpeg';
import H8 from '../../assets/images/H8.jpeg';
import H9 from '../../assets/images/H9.jpeg';
import H10 from '../../assets/images/H10.jpeg';
import H11 from '../../assets/images/H11.jpeg';
import H12 from '../../assets/images/H12.jpeg';
import I1 from '../../assets/images/I1.jpeg';
import I2 from '../../assets/images/I2.jpeg';
import I3 from '../../assets/images/I3.jpeg';
import I4 from '../../assets/images/I4.jpeg';
import I5 from '../../assets/images/I5.jpeg';
import I6 from '../../assets/images/I6.jpeg';
import I7 from '../../assets/images/I7.jpeg';
import I8 from '../../assets/images/I8.jpeg';
import I9 from '../../assets/images/I9.jpeg';
import I10 from '../../assets/images/I10.jpeg';
import I11 from '../../assets/images/I11.jpeg';
import I12 from '../../assets/images/I12.jpeg';
// import I13 from '../../assets/images/I13.jpeg';
import I14 from '../../assets/images/I14.jpeg';
import I15 from '../../assets/images/I15.jpeg';
import I16 from '../../assets/images/I16.jpeg';
import I17 from '../../assets/images/I17.jpeg';
import I18 from '../../assets/images/I18.jpeg';
import I19 from '../../assets/images/I19.jpeg';
import I20 from '../../assets/images/I20.jpeg';
import I21 from '../../assets/images/I21.jpeg';
import I22 from '../../assets/images/I22.jpeg';
import I23 from '../../assets/images/I23.jpeg';
import I24 from '../../assets/images/I24.jpeg';
import I25 from '../../assets/images/I25.jpeg';
import I26 from '../../assets/images/I26.jpeg';
import I27 from '../../assets/images/I27.jpeg';
import I28 from '../../assets/images/I28.jpeg';
import I29 from '../../assets/images/I29.jpeg';
import I30 from '../../assets/images/I30.jpeg';
import I31 from '../../assets/images/I31.jpeg';
import I32 from '../../assets/images/I32.jpeg';
import I33 from '../../assets/images/I33.jpeg';
import I34 from '../../assets/images/I34.jpeg';
import I35 from '../../assets/images/I35.jpeg';
import I36 from '../../assets/images/I36.jpeg';
import I37 from '../../assets/images/I37.jpeg';
import I38 from '../../assets/images/I38.jpeg';
import I39 from '../../assets/images/I39.jpeg';
import I40 from '../../assets/images/I40.jpeg';
import J1 from '../../assets/images/j1.jpeg';
import J2 from '../../assets/images/j2.jpeg';
import J3 from '../../assets/images/j3.jpeg';
import J4 from '../../assets/images/j4.jpeg';
import J5 from '../../assets/images/j5.jpeg';
import J6 from '../../assets/images/j6.jpeg';
import J7 from '../../assets/images/j7.jpeg';
import J8 from '../../assets/images/j8.jpeg';
import J9 from '../../assets/images/j9.jpeg';
import J10 from '../../assets/images/j10.jpeg';
import J11 from '../../assets/images/j11.jpeg';
import J12 from '../../assets/images/j12.jpeg';
import J13 from '../../assets/images/j13.jpeg';
import J14 from '../../assets/images/j14.jpeg';
import J15 from '../../assets/images/j15.jpeg';
import J16 from '../../assets/images/j16.jpeg';

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
        { image: H5, category: 'Education', title: 'Education Initiative 10' },
        { image: H6, category: 'Education', title: 'Education Initiative 11' },
        { image: H7, category: 'Education', title: 'Education Initiative 12' },
        { image: H8, category: 'Education', title: 'Education Initiative 13' },
        { image: H9, category: 'Education', title: 'Education Initiative 14' },
        { image: H10, category: 'Education', title: 'Education Initiative 15' },
        { image: H11, category: 'Education', title: 'Education Initiative 16' },
        { image: H12, category: 'Education', title: 'Education Initiative 17' }
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
    ],
    menstrualHealth: [
        { image: I1, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 1' },
        { image: I2, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 2' },
        { image: I3, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 3' },
        { image: I4, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 4' },
        { image: I5, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 5' },
        { image: I6, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 6' },
        { image: I7, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 7' },
        { image: I8, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 8' },
        { image: I9, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 9' },
        { image: I10, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 10' },
        { image: I11, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 11' },
        { image: I12, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 12' },
        // { image: I13, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 13' },
        { image: I14, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 14' },
        { image: I15, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 15' },
        { image: I16, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 16' },
        { image: I17, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 17' },
        { image: I18, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 18' },
        { image: I19, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 19' },
        { image: I20, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 20' },
        { image: I21, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 21' },
        { image: I22, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 22' },
        { image: I23, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 23' },
        { image: I24, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 24' },
        { image: I25, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 25' },
        { image: I26, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 26' },
        { image: I27, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 27' },
        { image: I28, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 28' },
        { image: I29, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 29' },
        { image: I30, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 30' },
        { image: I31, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 31' },
        { image: I32, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 32' },
        { image: I33, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 33' },
        { image: I34, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 34' },
        { image: I35, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 35' },
        { image: I36, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 36' },
        { image: I37, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 37' },
        { image: I38, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 38' },
        { image: I39, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 39' },
        { image: I40, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 40' },
        { image: J1, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 41' },
        { image: J2, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 42' },
        { image: J3, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 43' },
        { image: J4, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 44' },
        { image: J5, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 45' },
        { image: J6, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 46' },
        { image: J7, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 47' },
        { image: J8, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 48' },
        { image: J9, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 49' },
        { image: J10, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 50' },
        { image: J11, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 51' },
        { image: J12, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 52' },
        { image: J13, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 53' },
        { image: J14, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 54' },
        { image: J15, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 55' },
        { image: J16, category: 'Menstrual Health', title: 'Menstrual Health & School Girls 56' }
    ],
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
                        <button 
                            className={`filter-btn ${activeCategory === 'menstrualHealth' ? 'active' : ''}`}
                            onClick={() => handleCategoryChange('menstrualHealth')}
                            aria-label="Filter by menstrual health"
                        >
                            Menstrual Health
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