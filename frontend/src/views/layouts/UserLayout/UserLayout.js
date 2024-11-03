// src/views/layouts/UserLayout/UserLayout.js

import React from 'react';
import UserNavbar from './UserNavbar'; // Ensure the path to UserNavbar is correct

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      {/* Call the UserNavbar at the top of the layout */}
      <UserNavbar />

      {/* Main content section */}
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
