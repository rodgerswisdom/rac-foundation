import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-column">
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#careers">Careers</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Support</h3>
                <ul>
                    <li><a href="#consulting">Consulting</a></li>
                    <li><a href="#development">Development</a></li>
                    <li><a href="#design">Design</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#email">Email</a></li>
                    <li><a href="#phone">Phone</a></li>
                    <li><a href="#location">Location</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
