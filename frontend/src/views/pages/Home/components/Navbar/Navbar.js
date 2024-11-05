import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="logo">
          <img src="logo.png" alt="KUSMA Logo" />
          <h1>Konsortium Usahawan Madani</h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#main">Main</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
          <a href="#gallery">Photo Gallery</a>
          <div className="mobile-auth-buttons">
            <a href="#login" className="mobile-auth-link">Login</a>
            <a href="#signup" className="mobile-auth-link">
              Sign Up <FaArrowRight className="ms-1" />
            </a>
          </div>
        </nav>

        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">
            Sign Up <FaArrowRight />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
