import React from 'react';
import './CareerHub.css';
import { Link } from 'react-router-dom';

const CareerHub = () => {
  return (
    <div className="career-page">
      <div className="career-header">
        <h1>Career Hub</h1>
        <p>Discover your next career opportunity</p>
        <div className="career-buttons">
          <Link to="/assistant">
            <button className="btn-assistant">CareerMe Assistant</button>
          </Link>
          <Link to="/login">
            <button className="btn-login">Login / Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Search jobs by title, company, or location..." />
      </div>

      <div className="stats-cards">
        <div className="stat-card"><span>6</span><p>Open Positions</p></div>
        <div className="stat-card"><span>6</span><p>Companies</p></div>
        <div className="stat-card"><span>5</span><p>Locations</p></div>
        <div className="stat-card"><span>6</span><p>Departments</p></div>
      </div>

      <Link to="/jobdetails" className="job-card-link">
        <div className="job-card">
          <img src="https://images.unsplash.com/photo-1581090700227-4c4a3f17f4dd" alt="Job" />
          <div className="job-info">
            <h2>Senior Frontend Developer</h2>
            <p>TechInnovate Solutions</p>
            <div className="job-meta">
              <span>Engineering</span>
              <span>Bangalore, India</span>
              <span>Full-time</span>
              <span className="level-badge">Senior Level (5+ years)</span>
            </div>
            <p className="job-desc">
              We are looking for a Senior Frontend Developer to join our innovative team. You'll work with React, TypeScript, Node.js to build modern applications.
            </p>
            <div className="tags">
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>AWS</span>
              <span>+5 more</span>
            </div>
          </div>
          <div className="salary-badge">₹ 1,200,000 - ₹ 2,000,000</div>
        </div>
      </Link>

      <Link to="/jobdetails" className="job-card-link">
        <div className="job-card">
          <img src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f" alt="Job" />
          <div className="job-info">
            <h2>Data Scientist</h2>
            <p>DataFlow Analytics</p>
            <div className="job-meta">
              <span>Data</span>
              <span>Mumbai, India</span>
              <span>Full-time</span>
            </div>
            <p className="job-desc">
              Looking for a skilled Data Scientist to work on cutting-edge ML models and data-driven strategies.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>TensorFlow</span>
              <span>SQL</span>
              <span>ML</span>
            </div>
          </div>
          <div className="salary-badge">₹ 900,000 - ₹ 1,500,000</div>
        </div>
      </Link>
    </div>
  );
};

export default CareerHub;