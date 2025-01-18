import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { NavLink } from "react-router";
import "./Navbar.css"

function Navbar() {
    return(
        <nav className="navbar">
            <div className="nav-container">
            <img src={logo} alt="Logo" className="nav-logo" />
                <ul className="nav-links">
                <li>
                    <NavLink to="/" className="nav-links-li" end>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to="/about-us" className="nav-links-li">About Us</NavLink></li>
                <li><Link to="/gallery" className="nav-links-li">Gallery</Link></li>
                <li><Link to="/contact-us" className="nav-links-li">Contact Us</Link></li>
                </ul>
            </div>  
        </nav>
    )
}


export default Navbar