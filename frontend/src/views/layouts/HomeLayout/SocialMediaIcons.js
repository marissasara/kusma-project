import React from 'react';
import { Row } from 'react-bootstrap';

const SocialMediaIcons = () => {
  const iconStyle = { fontSize: '2rem', margin: '0 1rem' };

  return (
    <>
    <div className="d-flex justify-content-center">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <i className="bi bi-youtube"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <i className="bi bi-twitter"></i> {/* X (Twitter) */}
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <i className="bi bi-tiktok"></i>
      </a>
    </div>
    <Row className="d-flex justify-content-center text-primary">
    NASIONALfm
    </Row>
    </>
  );
}

export default SocialMediaIcons;
