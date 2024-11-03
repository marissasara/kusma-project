import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Account from '../Global/Account';
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
                    <a href="/" className="d-flex align-items-center text-decoration-none text-light mb-4">
                        <span className="fs-5">U<span className="d-none d-sm-inline">ser</span></span>
                    </a>
                    <nav>
                        <ul className="menu-list">
                            <li className="nav-item">
                                <Link to="/user/home" className="menu-link" onClick={toggleMenu}>
                                    <i className="fs-5 bi-house"></i> <span className="ms-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user/user_profile" className="menu-link" onClick={toggleMenu}>
                                    <i className="fs-5 bi-person"></i> <span className="ms-2">Profile</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Account />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
