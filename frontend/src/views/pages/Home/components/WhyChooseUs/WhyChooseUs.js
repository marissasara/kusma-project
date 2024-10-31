// src/components/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';
import { FaBuilding, FaMoneyBillWave, FaUsers, FaBullseye } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaBuilding />,
      title: "One-Stop Centre",
      description: "Comprehensive support for business growth.",
      bgColor: "#FFEDD5"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Government-Backed",
      description: "Access to key funding and resources.",
      bgColor: "#FEF3C7"
    },
    {
      icon: <FaUsers />,
      title: "Entrepreneur Development",
      description: "Building a strong entrepreneurial community.",
      bgColor: "#FDE68A"
    },
    {
      icon: <FaBullseye />,
      title: "Tailored Support",
      description: "Focused on empowering civil entrepreneurs.",
      bgColor: "#D1FAE5"
    }
  ];

  return (
    <div className="why-choose-us-section py-5">
      <div className="container">
        <h1 className="section-title text-center mb-5">Why Choose Us?</h1>
        <div className="row justify-content-center">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-4"
            >
              <div className="reason-card text-center p-4 rounded shadow" style={{ backgroundColor: reason.bgColor }}>
                <div className="icon-circle mb-3">{reason.icon}</div>
                <h3 className="reason-title mb-2">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
