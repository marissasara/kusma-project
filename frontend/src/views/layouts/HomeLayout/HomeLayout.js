// src/views/layouts/HomeLayout/HomeLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // To render nested routes
import Navbar from '../../pages/Home/components/Navbar/Navbar';
import '../../pages/Home/components/Navbar/Navbar.css';

import Footer from '../../pages/Home/components/Footer/Footer';
import './style.css';

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <Navbar /> {/* Navbar at the top */}
      <div className="main-content">
        <Outlet /> {/* This will render the nested routes */}
      </div>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default HomeLayout;
