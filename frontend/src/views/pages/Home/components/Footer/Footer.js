// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/logo.png" alt="Kusma Logo" />
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Locate Us</h3>
            <p>Level 8–09 Wangsa 118, Wangsa Maju</p>
            <p>Jalan Wangsa Delima, 53300 Kuala Lumpur, Malaysia</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">For More Inquiries</h3>
            <p>📞 (+6) 03-2303 9512</p>
            <p>✉️ info@kusma.my (Admin Dept.)</p>
            <p>✉️ idzham@kusma.my (Manager Dept.)</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Operating Hours</h3>
            <p>Monday–Friday: 09:00 - 18:00</p>
            <p>Saturday & Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© 2024 KUSMA SDN. BHD.</span>
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
