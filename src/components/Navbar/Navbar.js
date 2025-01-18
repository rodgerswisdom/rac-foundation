import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={logo} alt="Logo" className="nav-logo" />
        <button className="nav-toggle" onClick={toggleNavbar}>
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
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
      </div>
    </nav>
  );
}

export default Navbar;
