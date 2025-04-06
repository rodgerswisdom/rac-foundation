import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} alt="Logo" className="nav-logo" />
        <ul className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
          <li>
            <NavLink to="/" className="nav-links-li" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav-links-li">
              About Us
            </NavLink>
          </li>
          <li>
            <Link to="/gallery" className="nav-links-li">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="nav-links-li">
              Contact Us
            </Link>
          </li>
        </ul>
        <button className="nav-toggle" onClick={handleToggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
