// src/components/LandingPage.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">
          <img src="logo.png" alt="KUSMA Logo" />
          <h1>Konsortium Usahawan Madani</h1>
        </div>
        <Navbar />
        <div className="auth-buttons">
          <button className="login-btn btn btn-warning">Login</button>
          <button className="signup-btn btn btn-primary">Sign Up</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Fueling Business Growth with Easy Access to Government Funding.</h2>
          <p>
            Simplifying <strong>loans</strong>, <strong>grants</strong>, <strong>training</strong>, and <strong>tools</strong> for Malaysian businesses and startups.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="team.png" alt="Team" />
        </div>
      </section>

      <section className="steps-section">
        <h2>Financing your business has never been simpler</h2>
        <p>Follow these steps to embark on a new journey!</p>
        <div className="steps-list">
          <div className="step-item">
            <div className="step-number">1</div>
            <div className="step-text">Register & Login</div>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <div className="step-text">Get Personalized Recommendations by 66 agencies</div>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <div className="step-text">Receive Support Programs and Grow Your Business!</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
