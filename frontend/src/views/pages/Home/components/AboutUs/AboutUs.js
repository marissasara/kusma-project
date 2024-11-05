// AboutUs.js

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">

        {/* About Us Section */}
        <section className="about-section text-center py-5">
          <h1 className="display-4">About Us</h1>
          <p className="lead about-description">
            <strong>Konsortium Usahawan Madani</strong> was established in 2024, committed to driving business success through consulting in finance and technology, empowering both new and established entrepreneurs.
          </p>
          <p className="specialty-text">Facilitating customers is <strong>our specialty.</strong></p>
        </section>

        {/* Mission & Vision Section */}
        <section className="mission-vision py-5">
          <div className="mission">
            <h2 className="section-heading">Our Mission</h2>
            <p>To be the main platform for developing skilled and knowledgeable civil entrepreneurs.</p>
          </div>
          <div className="vision">
            <h2 className="section-heading">Our Vision</h2>
            <p>To lead in building an inclusive, sustainable, and progressive entrepreneurial ecosystem.</p>
          </div>
        </section>

        {/* Core Competencies and Goals Side-by-Side */}
        <div className="competencies-goals-container">
          
          {/* Core Competencies Section */}
          <section className="core-competencies">
            <h2 className="section-heading">Core Competencies</h2>
            <div className="competency-list">
              {competencies.map((competency, index) => (
                <div key={index} className="competency-item">
                  <div className="competency-icon">{competency.icon}</div>
                  <div className="competency-title">{competency.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Goals Section */}
          <section className="goals-section">
            <h2 className="section-heading">Our Goals</h2>
            <div className="goals-list">
              {goals.map((goal, index) => (
                <div key={index} className="goal-item">
                  <div className="goal-icon">{goal.icon}</div>
                  <p className="goal-text">{goal.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const competencies = [
  { icon: <i className="fas fa-network-wired" />, title: "One Stop Centre Biznet" },
  { icon: <i className="fas fa-hands-helping" />, title: "Usahawan Perpaduan (UP)" },
  { icon: <i className="fas fa-award" />, title: "Anugerah Perdana Usahawan Madani (APUM)" },
  { icon: <i className="fas fa-road" />, title: "Road Show Jelajah Usahawan Madani (JUM)" },
  { icon: <i className="fas fa-link" />, title: "Rantaian Usahawan Madani (RUM)" },
  { icon: <i className="fas fa-chalkboard-teacher" />, title: "Seminar Usahawan Madani Bumiputera (SUMBU)" }
];

const goals = [
  { icon: <i className="fas fa-user-graduate" />, text: "Developing Skilled Civil Entrepreneurs" },
  { icon: <i className="fas fa-chart-line" />, text: "Strengthening the Economy" },
  { icon: <i className="fas fa-users" />, text: "Building a Supportive Community" },
  { icon: <i className="fas fa-hands" />, text: "Facilitating Government Assistance" }
];

export default AboutUs;
