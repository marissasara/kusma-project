// src/views/layouts/UserLayout/UserLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // To render nested routes
import './UserLayout.css';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';

const UserLayout = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true); // Assume logged-in state for UserLayout

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    // Add logout functionality here
    setLoggedIn(false);
  };

  return (
    <div className="user-layout">
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

          <div className="auth-section">
            {loggedIn ? (
              <div className="user-menu" onClick={toggleUserMenu}>
                <FaUserCircle size={30} />
                {isUserMenuOpen && (
                  <div className="user-dropdown-menu">
                    <a href="#profile">Profile</a>
                    <a href="#settings">Settings</a>
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="auth-buttons">
                <button className="login-btn btn btn-warning" onClick={() => setLoggedIn(true)}>Login</button>
                <button className="signup-btn btn btn-primary">
                  Sign Up <FaArrowRight className="ms-2" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet /> {/* This will render any nested routes */}
      </main>
    </div>
  );
};

export default UserLayout;
