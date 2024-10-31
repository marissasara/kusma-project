// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Main</Link></li>
        <li className="dropdown">
          <span onClick={toggleDropdown}>About</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about/directors">Board of Directors</Link></li>
              <li><Link to="/about/members">Board of Members</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
