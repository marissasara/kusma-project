import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../../stores/AuthStore';
import './SideBar.css';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const store = useAuthStore();

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
                            <li className="nav-item">
                                <Link to="/user/home" className="menu-link" onClick={toggleMenu}>
                                    <i className="fs-5 bi-house"></i> <span className="ms-2">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`${localStorage.getItem('role')}/profile`} className="menu-link" onClick={toggleMenu}>
                                    <i className="fs-5 bi-person"></i> <span className="ms-2">Profile</span>
                                </Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link to={`${localStorage.getItem('role')}/sign-out`} className="menu-link" onClick={toggleMenu}>
                                    <i className="fs-5 bi-box-arrow-right"></i> <span className="ms-2">Sign Out</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
