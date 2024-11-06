import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          <h1 className="title-no-wrap">Konsortium Usahawan Madani</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle d-lg-none" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Links (visible on lg and up) */}
        <nav className="navbar-links d-none d-lg-flex">
          <Link to="/">Main</Link>
          <Link to="/about-us">About</Link>
          <Link to="/contact-us">Contact Us</Link>
          {/* <Link to="/photo-gallery">Photo Gallery</Link> */}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="auth-buttons d-none d-lg-flex">
          <Link to="/sign-in" className="login-btn rounded">Login</Link>
          <Link to="/register" className="signup-btn rounded">
            Sign Up <FaArrowRight />
          </Link>
        </div>

        {/* Mobile Links and Auth Buttons (visible on md and below) */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''} d-md-none`}>
          <Link to="/">Main</Link>
          <Link to="/about-us">About</Link>
          <Link to="/contact-us">Contact Us</Link>
          {/* <Link to="/photo-gallery">Photo Gallery</Link> */}
          <div className="mobile-auth-buttons mt-3">
            <Link to="/sign-in" className="mobile-auth-link">Login</Link>
            <Link to="/register" className="mobile-auth-link">
              Sign Up <FaArrowRight className="ms-1" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
