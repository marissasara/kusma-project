// src/components/Header.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import { FaArrowRight } from 'react-icons/fa'; // Import Font Awesome icon

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="KUSMA Logo" />
        <h1>Konsortium Usahawan Madani</h1>
      </div>
      <Navbar />
      <div className="auth-buttons">
        <button className="login-btn btn btn-warning text-dark fw-bold">Login</button>
        <button className="signup-btn btn btn-primary text-white fw-bold d-flex align-items-center">
          Sign Up <FaArrowRight className="ms-2" />
        </button>
      </div>
    </header>
  );
};

export default Header;
