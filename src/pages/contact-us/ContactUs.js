import React, { useState } from 'react';
import './ContactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Whether you have a question, want to get involved, or simply want to learn more about our work, please don't hesitate to reach out.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-card">
                        <FaMapMarkerAlt className="info-icon" />
                        <h3>Our Location</h3>
                        <p>Raise A Child Foundation (RAC)<br />Nairobi, Kenya</p>
                    </div>
                    <div className="info-card">
                        <FaPhone className="info-icon" />
                        <h3>Phone</h3>
                        <p>+254 728 759 690</p>
                    </div>
                    <div className="info-card">
                        <FaEnvelope className="info-icon" />
                        <h3>Email</h3>
                        <p>aderoannete@gmail.com</p>
                    </div>
                    <div className="info-card">
                        <FaClock className="info-icon" />
                        <h3>Working Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                placeholder="Enter your full name"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Enter your email address"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                placeholder="Enter message subject"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Enter your message here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;