import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-column">
                    {/* <h3>Useful Links</h3> */}
                    <ul>
                        <li><a href="https://rac-foundation.org/about-us">About Us</a></li>
                        <li><a href="https://rac-foundation.org/about-us">Mission</a></li>
                        <li><a href="https://rac-foundation.org/about-us">Vision</a></li>
                        <li><a href="https://rac-foundation.org/about-us">News & Events</a></li>
                        
                    </ul>
                </div>
                <div className="footer-column">
                    {/* <h3>Support</h3> */}
                    <ul>
                        <li><a href="#consulting">FAQs</a></li>
                        <li><a href="#development">Help Center</a></li>
                        <li><a href="https://rac-foundation.org/contact-us">Contact us</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    {/* <h3>Follow Us</h3> */}
                    <ul>
                        <li><a href="#email">Facebook</a></li>
                        <li><a href="#phone">Instagram</a></li>
                        <li><a href="#location">X</a></li>
                        <li><a href="#phone">TikTok</a></li>
                    </ul>
                </div>
            </div>
            <div className="final-div">
                <hr className="footer-hr" />
                <div className="footer-bottom-text">RAC Foundation @ 2024</div>
            </div>
            
        </>
    );
}

export default Footer;
