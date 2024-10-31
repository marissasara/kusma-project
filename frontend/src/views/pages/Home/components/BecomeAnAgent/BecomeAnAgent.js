// src/components/BecomeAnAgent.js
import React from 'react';
import './BecomeAnAgent.css';
import { FaUserPlus } from 'react-icons/fa'; // Icon for added emphasis

const BecomeAnAgent = () => {
  return (
    <section className="become-an-agent-section text-center">
      <div className="container">
        <h2 className="agent-section-title mb-4">Become a KUSMA Agent Today</h2>
        <p className="section-description mb-5">
          Join our network and help us expand access to essential services across Malaysia. As a KUSMA agent, you’ll earn commission on each successful referral while supporting local businesses.
        </p>
        <button className="btn btn-primary btn-lg">
          <FaUserPlus /> Get Started Now
        </button>
      </div>
    </section>
  );
};

export default BecomeAnAgent;
