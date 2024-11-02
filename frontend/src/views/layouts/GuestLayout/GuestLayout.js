// GuestLayout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../../pages/Home/components/Navbar/Navbar';
import Footer from '../../pages/Home/components/Footer/Footer';
import '../../pages/Home/components/Navbar/Navbar.css';

const GuestLayout = () => {
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

export default GuestLayout;
