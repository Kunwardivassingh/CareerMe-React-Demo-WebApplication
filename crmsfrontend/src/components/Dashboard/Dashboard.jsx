import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // If not logged in, redirect to login
    if (!auth.isAuthenticated) {
      navigate('/login');
    }
  }, [auth, navigate]);

  const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userName');
  setAuth({ isAuthenticated: false, name: '' });
  navigate('/'); // 👈 redirect to home page
};

  return (
    <div className="homepage">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">▶</div>
            <div className="logo-text">
              <h2>TalentX9</h2>
              <p>Powered by AI, guided by human values</p>
            </div>
          </div>
          <div className="nav-links">
            <Link to="/features" className="nav-link">Features</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            {auth.isAuthenticated ? (
              <div className="profile-menu">
                <button className="nav-link profile-btn">{auth.name.charAt(0).toUpperCase()}</button>
                <div className="dropdown-content">
                  <button onClick={handleLogout} className="logout-btn">Logout</button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="login-btn">Login</Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome, {auth.name} 👋</h1>
          <p className="hero-subtitle">
            This is your personalized dashboard. Explore AI-powered recruitment tools, manage interviews, and streamline your hiring process with TalentX9.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Your Features</h2>
          <p className="section-subtitle">
            Empower your HR team with seamless, intelligent tools
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon pink">🤖</div>
              <h3>AI Interviewer</h3>
              <p>Automated video interviews with instant analysis and scoring.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Get real-time insights into candidate performance and hiring trends.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">⚡</div>
              <h3>Fast Matching</h3>
              <p>Match candidates to roles with AI-driven skill & personality predictions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="statcard">
              <h3 className="stat-number">5x</h3>
              <p className="stat-label">Faster Hiring</p>
            </div>
            <div className="statcard">
              <h3 className="stat-number">90%</h3>
              <p className="stat-label">Candidate Satisfaction</p>
            </div>
            <div className="statcard">
              <h3 className="stat-number">1,000+</h3>
              <p className="stat-label">Interviews Automated</p>
            </div>
            <div className="statcard">
              <h3 className="stat-number">98%</h3>
              <p className="stat-label">Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">▶</div>
                <h3>TalentX9</h3>
              </div>
              <p>
                Empowering your workforce with AI-driven recruitment. Powered by AI, guided by human values.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <Link to="/features">Features</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy Policy</Link>
              </div>

              <div className="footer-column">
                <h4>Solutions</h4>
                <Link to="/ai-interviewer">AI Interviewer</Link>
                <Link to="/video-interviews">Video Interviews</Link>
                <Link to="/skills-assessment">Skills Assessment</Link>
                <Link to="/analytics">Analytics</Link>
              </div>

              <div className="footer-column">
                <h4>Contact Info</h4>
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  testtalX99@gmail.com
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  +91 98765 43210
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  Mumbai, India
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 TalentX9. All rights reserved. Built with ❤️ for better hiring.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
