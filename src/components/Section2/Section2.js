import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import Card1 from "../Body/card-1";
import C1 from "../../assets/images/C1.jpeg";
// import  C2 from "../../assets/images/C2.jpeg";
import  C3 from "../../assets/images/C3.jpeg";
import G7 from "../../assets/images/G7.jpeg";
import "./Section2.css";

function Section2() {
    const [activeFilter, setActiveFilter] = useState('all');
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        initialInView: true
    });

    const causes = [
        {
            id: 1,
            imageSrc: C1,
            title: "Education for All",
            description: "Every child deserves the opportunity to learn and grow. We provide essential school supplies and amenities to ensure that no child is left behind due to lack of resources. Join us in empowering the next generation through education.",
            category: "education"
        },
        {
            id: 2,
            imageSrc: G7,
            title: "Menstrual Health & Empowerment",
            description: "Promoting menstrual hygiene and education is crucial for the well-being of young girls. We campaign against teen pregnancies and work to eradicate female genital mutilation (FGM), ensuring that girls can thrive with dignity and confidence.",
            category: "health"
        },
        {
            id: 3,
            imageSrc: C3,
            title: "Community Support",
            description: "We reach out to children's homes and vulnerable communities, providing necessary supplies and support. Our goal is to create a nurturing environment where every child feels valued and has the opportunity to succeed.",
            category: "community"
        },
    ];

    const filteredCauses = activeFilter === 'all' 
        ? causes 
        : causes.filter(cause => cause.category === activeFilter);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <section 
            ref={ref}
            className={`our-causes ${inView ? 'fade-in' : ''}`}
            aria-label="Our Causes"
        >
            <div className="our-causes-header">
                <h2 className="our-causes-title">Our Causes</h2>
                <p className="our-causes-subtitle">
                    Making a difference in children's lives through education, health, and community support
                </p>
                
                <div className="filter-buttons">
                    <button 
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('all')}
                        aria-label="Show all causes"
                    >
                        All Causes
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'education' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('education')}
                        aria-label="Filter by education"
                    >
                        Education
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'health' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('health')}
                        aria-label="Filter by health"
                    >
                        Health
                    </button>
                    <button 
                        className={`filter-btn ${activeFilter === 'community' ? 'active' : ''}`}
                        onClick={() => handleFilterChange('community')}
                        aria-label="Filter by community"
                    >
                        Community
                    </button>
                </div>
            </div>
            
            <div className="our-causes-container">
                {filteredCauses.map((cause) => (
                    <Card1
                        key={cause.id}
                        imageSrc={cause.imageSrc}
                        title={cause.title}
                        description={cause.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Section2;
