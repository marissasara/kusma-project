// src/components/UserNavbar/UserNavbar.js
import React, { useState } from 'react';
import './UserNavbar.css';
import { FaUser } from 'react-icons/fa';
import logo from '../../../assets/logo.png'; // Ensure this path is correct

const UserNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming the user is logged in for this example

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
    setIsUserMenuOpen(false);
    // Additional actions such as redirecting can be added here
  };

  return (
    <header className="navbar-header">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="KUSMA Logo" /> {/* Use the imported logo variable */}
          <h1>Konsortium Usahawan Madani</h1>
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#main">Main</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#profile">Profile</a></li>
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
          {isLoggedIn ? (
            <div className="user-menu" onClick={toggleUserMenu}>
              <span><FaUser /> User</span>
              {isUserMenuOpen && (
                <div className="user-dropdown-menu">
                  <a href="#profile" className="profile-link">Profile</a>
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="login-btn btn btn-warning">Login</button>
              <button className="signup-btn btn btn-primary">Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;
