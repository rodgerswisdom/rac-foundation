import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">About RAC</h3>
                    <p className="footer-description">
                        Raise a Child Foundation is dedicated to improving the lives of children and communities through education, support, and empowerment.
                    </p>
                </div>
                
                <div className="footer-section">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/about-us#mission">Mission</Link></li>
                        <li><Link to="/about-us#vision">Vision</Link></li>
                        <li><Link to="/news">News & Events</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Support</h3>
                    <ul className="footer-links">
                        <li><Link to="/faqs">FAQs</Link></li>
                        <li><Link to="/help">Help Center</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Connect With Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok />
                        </a>
                    </div>
                    <div className="newsletter">
                        <h4>Subscribe to our newsletter</h4>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email address" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <div className="footer-bottom-content">
                    <p>&copy; {new Date().getFullYear()} RAC Foundation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
