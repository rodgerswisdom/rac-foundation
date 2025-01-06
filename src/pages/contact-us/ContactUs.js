import React, { useState } from 'react';
import './ContactUs.css';

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
        <div>
            <div className="contact-us">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have a question, want to get involved, or simply want to learn more about our work, please don't hesitate to reach out.</p>
            <h2>Get in Touch</h2>
            <p><strong>Address:</strong><br />Raise A Child Foundation (RAC)<br />Nairobi, Kenya</p>
            <p><strong>Phone:</strong><br />+254 728 759 690</p>
            <p><strong>Email:</strong><br />aderoannete@gmail.com</p>
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default ContactUs;