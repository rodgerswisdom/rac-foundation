import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import './Donate.css';

const Donate = () => {
    const [donationAmount, setDonationAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountSelect = (amount) => {
        setDonationAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setCustomAmount(value);
            setDonationAmount('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate with a payment processor
        console.log('Donation submitted:', {
            amount: donationAmount || customAmount,
            type: donationType
        });
        // Redirect to payment processing or show payment form
    };

    return (
        <>
            <SEO 
                title="Donate to RAC Foundation"
                description="Support our mission to empower communities through education, health, and sustainable development initiatives in Kenya."
                keywords="donate, RAC Foundation, charity, Kenya, education, health, community development"
                canonicalUrl="https://rac-foundation.org/donate"
            />
            <div className="donate-container">
                <div className="donate-header">
                    <h1>Make a Donation</h1>
                    <p>Your contribution helps us continue our mission to empower communities and improve lives.</p>
                </div>

                <div className="donate-content">
                    <div className="donation-form-container">
                        <form className="donation-form" onSubmit={handleSubmit}>
                            <div className="donation-type-selector">
                                <h3>Select Donation Type</h3>
                                <div className="donation-type-options">
                                    <label className={`donation-type-option ${donationType === 'one-time' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="donationType"
                                            value="one-time"
                                            checked={donationType === 'one-time'}
                                            onChange={() => setDonationType('one-time')}
                                        />
                                        <span>One-Time Donation</span>
                                    </label>
                                    <label className={`donation-type-option ${donationType === 'monthly' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="donationType"
                                            value="monthly"
                                            checked={donationType === 'monthly'}
                                            onChange={() => setDonationType('monthly')}
                                        />
                                        <span>Monthly Donation</span>
                                    </label>
                                </div>
                            </div>

                            <div className="donation-amount-selector">
                                <h3>Select Amount</h3>
                                <div className="amount-options">
                                    <button 
                                        type="button" 
                                        className={`amount-option ${donationAmount === '10' ? 'active' : ''}`}
                                        onClick={() => handleAmountSelect('10')}
                                    >
                                        $10
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`amount-option ${donationAmount === '25' ? 'active' : ''}`}
                                        onClick={() => handleAmountSelect('25')}
                                    >
                                        $25
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`amount-option ${donationAmount === '50' ? 'active' : ''}`}
                                        onClick={() => handleAmountSelect('50')}
                                    >
                                        $50
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`amount-option ${donationAmount === '100' ? 'active' : ''}`}
                                        onClick={() => handleAmountSelect('100')}
                                    >
                                        $100
                                    </button>
                                </div>
                                <div className="custom-amount">
                                    <label htmlFor="customAmount">Custom Amount:</label>
                                    <div className="custom-amount-input">
                                        <span className="currency-symbol">$</span>
                                        <input
                                            type="text"
                                            id="customAmount"
                                            value={customAmount}
                                            onChange={handleCustomAmountChange}
                                            placeholder="Enter amount"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="donate-button">
                                {donationType === 'one-time' ? 'Donate Now' : 'Start Monthly Donation'}
                            </button>
                        </form>
                    </div>

                    <div className="donation-info">
                        <h3>Why Donate to RAC Foundation?</h3>
                        <ul>
                            <li>Support education initiatives for underprivileged children</li>
                            <li>Help provide healthcare services to communities in need</li>
                            <li>Fund sustainable development projects</li>
                            <li>Make a lasting impact in Kenyan communities</li>
                        </ul>
                        
                        <div className="tax-info">
                            <h4>Tax Information</h4>
                            <p>RAC Foundation is a registered 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law.</p>
                        </div>
                        
                        <div className="other-ways-to-help">
                            <h4>Other Ways to Help</h4>
                            <p>Besides monetary donations, you can also:</p>
                            <ul>
                                <li><Link to="/volunteer">Volunteer with us</Link></li>
                                <li><Link to="/contact-us">Contact us</Link> to discuss other ways to support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Donate; 