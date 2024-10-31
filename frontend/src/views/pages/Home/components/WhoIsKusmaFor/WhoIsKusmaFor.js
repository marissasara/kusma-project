// src/components/WhoIsKusmaFor.js
import React from 'react';
import './WhoIsKusmaFor.css';

const WhoIsKusmaFor = () => {
  const sectionData = [
    {
      heading: "Students",
      description: (
        <>
          Start Building Your Business Future. Whether you're studying entrepreneurship or dreaming of starting your own business, KUSMA helps you discover funding opportunities to get your venture off the ground. Learn about <strong>grants</strong>, <strong>loans</strong>, and <strong>training</strong> tailored for student entrepreneurs.
        </>
      ),
      bgColor: "#FFEDD5"
    },
    {
      heading: "Business Owners",
      description: (
        <>
          Expand and Grow with the Right Support. Already running a business? KUSMA offers personalized loan and grant recommendations to help you scale. Access <strong>government-backed funding and business development programs</strong> to support your next phase of growth.
        </>
      ),
      bgColor: "#FEF3C7"
    },
    {
      heading: "Public",
      description: (
        <>
          Find the Support You Need. Are you just getting started or unsure where to begin? KUSMA simplifies the complex world of <strong>government funding, offering easy-to-understand advice</strong>, whether you’re exploring a business idea or looking for financial assistance.
        </>
      ),
      bgColor: "#FDE68A"
    }
  ];

  return (
    <div className="who-is-kusma-for py-5 text-center">
      <h2 className="mb-3">Who is KUSMA For?</h2>
      <p className="text-muted">Tailored Solutions for Every User</p>
      <div className="section-cards d-flex flex-wrap justify-content-center gap-4 mt-4">
        {sectionData.map((item, index) => (
          <div
            className="section-card p-4 rounded shadow-sm"
            key={index}
            style={{ backgroundColor: item.bgColor, maxWidth: "300px" }}
          >
            <h3 className="mb-2">{item.heading}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoIsKusmaFor;
