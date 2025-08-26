import React from 'react';
import { Link } from 'react-router-dom';
import './jobdetails.css';

const JobDetails = () => {
  return (
    <div className="job-page">
      <div className="job-header">
        <a href="/jobs" className="/jobs">← back to Jobs</a>
        <div className="company-info">
          <img src="https://via.placeholder.com/40" alt="Company Logo" className="company-logo" />
          <div>
            <h1>About Techninovate Solutions</h1>
            <p>
              ₹500+ Crores, 2,500 employees, and presence in Bangalore, Mumbai, Hyderabad, Chennai. It's guided by leaders Rajesh Kumar (CEO), Priya Sharma (CTO)
              <span className="glassdoor-rating">4.2 Glassdoor (1,820 reviews)</span>
            </p>
            <div className="company-stats">
              <span>₹ 2,500 employees</span> • <span>6 locations</span> • <span>Visit Website</span>
            </div>
          </div>
          <div className="download-btn">Download +</div>
        </div>
      </div>
      <div className="certifications-section">
        <div className="section-column">
          <h2>Certifications & Accreditations</h2>
          <ul>
            <li>ISO 9001:2015</li>
            <li>ISO 27001:2013</li>
            <li>CMM</li>
            <li>CMMI Level 5</li>
          </ul>
        </div>
        <div className="section-column">
          <h2>Workplace Awards</h2>
          <ul>
            <li>Great Place to Work 2022</li>
            <li>Best Companies for Women</li>
          </ul>
        </div>
        <div className="section-column">
          <h2>Partnerships</h2>
          <ul>
            <li>Google Cloud Partner</li>
            <li>Microsoft Gold Partner</li>
          </ul>
        </div>
      </div>
      <div className="products-section">
        <h2>Our Products & Services</h2>
        <div className="product-images">
          <div className="product-image">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
          </div>
          <div className="product-image">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
          </div>
          <div className="product-image">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
          </div>
        </div>
      </div>
      <div className="company-videos-section">
        <h2>Company Videos</h2>
        <div className="video-grid">
          <div className="video-card">
            <img src="https://via.placeholder.com/150" alt="Video 1" />
            <p>Our Enterprise Solutions <a href="/jobdetails" className="watch-link">Watch on YouTube</a></p>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/150" alt="Video 2" />
            <p>Company Achievements 2024 <a href="/jobdetails" className="watch-link">Watch on YouTube</a></p>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/150" alt="Video 3" />
            <p>Life at Techninovate <a href="/jobdetails" className="watch-link">Watch on YouTube</a></p>
          </div>
        </div>
      </div>
      <div className="awards-section">
        <h2>Awards & Recognition</h2>
        <ul>
          <li>⭐ Best Enterprise Software 2023</li>
          <li>⭐ Top Tech Employer 2024</li>
          <li>⭐ Innovation Excellence Award</li>
        </ul>
      </div>
      <div className="work-arrangements-section">
        <h2>Work Arrangements</h2>
        <ul>
          <li>📅 5 days/week (Mon-Fri)</li>
          <li>📍 Hybrid (3 days office, 2 days remote)</li>
          <li>🌏 South India - Technology Hub responsible for product development and innovation</li>
        </ul>
      </div>
      <div className="employee-feedback-section">
        <div className="feedback-column">
          <h2>What Employees Say</h2>
          <div className="feedback positives">
            <h3>Positives:</h3>
            <ul>
              <li>✅ Great work-life balance</li>
              <li>✅ Excellent learning opportunities</li>
              <li>✅ Supportive management</li>
              <li>✅ Competitive compensation</li>
            </ul>
          </div>
        </div>
        <div className="feedback-column">
          <h2>Areas for Improvement:</h2>
          <div className="feedback improvements">
            <ul>
              <li>⚠ Fast-paced environment</li>
              <li>⚠ High expectations</li>
              <li>⚠ Limited parking</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="compensation-section">
        <h2>Compensation & Benefits</h2>
        <div className="compensation-details">
          <p>Industry Benchmark: 75th percentile in industry</p>
          <p>Our compensation is competitive and includes performance-based incentives.</p>
        </div>
        <div className="benefits-details">
          <h3>Key Benefits:</h3>
          <ul>
            <li>🩺 Health Insurance</li>
            <li>📈 Stock Options</li>
            <li>💰 Performance Bonus</li>
            <li>📚 Learning Budget ₹50K/year</li>
          </ul>
        </div>
      </div>
      <div className="job-description-section">
        <h2>Senior Frontend Developer</h2>
        <div className="job-meta">
          <span>🛠 Engineering</span> • <span>🌆 Bangalore, India</span> • <span>⏰ Full-time</span>
        </div>
        <div className="job-salary">
          <span>Senior Level (5+ years)</span> <span>₹ 1,200,000 - ₹ 2,000,000</span>
        </div>
        <div className="reporting-to">
          <p>You'll be reporting to:</p>
          <p>Vikram Patel - Senior Engineering Manager (12+ years in product development)</p>
        </div>
        <div className="job-desc">
          <h3>Job Description</h3>
          <p>
            We are looking for a Senior Frontend Developer to join our innovative team. You will be responsible for building next-generation web applications using modern frontend technologies. Work with React, TypeScript, and Node.js to create scalable solutions that impact millions of users.
          </p>
        </div>
        <div className="work-culture">
          <h3>Work Culture & Growth</h3>
          <p>Collaborative, innovation-driven culture with emphasis on continuous learning</p>
          <p>Clear promotion paths with 6-month review cycles and mentorship programs</p>
        </div>
        <div className="perks-benefits">
          <h3>Perks & Benefits:</h3>
          <span>🍽 Free meals</span> <span>💪 Gym membership</span> <span>⏳ Flexible hours</span> <span>🌐 Work from anywhere policy</span>
        </div>
        <div className="required-skills">
          <h3>Required Skills:</h3>
          <span>React</span> <span>TypeScript</span> <span>Node.js</span> <span>AWS</span> <span>MongoDB</span> <span>GraphQL</span> <span>Jest</span> <span>CSS3</span> <span>HTML5</span>
        </div>
        <Link to="/login" className="start-interview-btn">Start Interview</Link>
      </div>
    </div>
  );
};

export default JobDetails;