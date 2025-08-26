import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>About CareerMe</h1>
      <p>
        CareerMe is an AI-powered recruitment platform dedicated to transforming the hiring experience for both employers and job seekers.
        We believe in leveraging advanced AI technologies guided by human values to connect top talent with leading organizations seamlessly.
      </p>
      <div className="about-section">
        <h2>Our Mission</h2>
        <p>To empower organizations and job seekers through innovative AI-driven solutions.</p>
      </div>
      <div className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>🤝 Human-centered design</li>
          <li>⚡ Innovation-driven solutions</li>
          <li>💬 Transparent communication</li>
          <li>🌎 Diversity & Inclusion</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
