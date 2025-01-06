import logo from "../../assets/21751412_6525428.svg"
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
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                </li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>  
        </nav>
    )
}


export default Navbar