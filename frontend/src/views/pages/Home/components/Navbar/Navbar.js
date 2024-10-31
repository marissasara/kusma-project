// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="logo">
          <img src="logo.png" alt="KUSMA Logo" />
          <h1>Konsortium Usahawan Madani</h1>
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#main">Main</a></li>
            <li 
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#about">About</a>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#board-directors">Board of Directors</a>
                  <a href="#board-members">Board of Members</a>
                </div>
              )}
            </li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#gallery">Photo Gallery</a></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="login-btn btn btn-warning">Login</button>
          <button className="signup-btn btn btn-primary">
            Sign Up <FaArrowRight className="ms-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
