import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <SEO 
                title="Page Not Found"
                description="The page you're looking for doesn't exist. Please check the URL or return to the homepage."
                canonicalUrl="https://rac-foundation.org/404"
            />
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist or has been moved.</p>
                    <div className="not-found-actions">
                        <Link to="/" className="primary-button">
                            Return to Homepage
                        </Link>
                        <Link to="/contact" className="secondary-button">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound; 