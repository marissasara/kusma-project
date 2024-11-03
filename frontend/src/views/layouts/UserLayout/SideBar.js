// HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger-btn" onClick={toggleMenu}>
        ☰
      </button>
      
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <button className="close-btn" onClick={toggleMenu}>
            ✕
          </button>
          <nav>
            <ul className="menu-list">
              <li><Link to="/user/home" className="menu-link" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/user/user_profile" className="menu-link" onClick={toggleMenu}>Profile</Link></li>
              <li><Link to="/settings" className="menu-link" onClick={toggleMenu}>Settings</Link></li>
              <li><Link to="/logout" className="menu-link" onClick={toggleMenu}>Logout</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideBar;


