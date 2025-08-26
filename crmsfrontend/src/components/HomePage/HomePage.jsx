
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage">
      {/* Navigation Header */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">▶</div>
            <div className="logo-text">
              <h2>CareerMe</h2>
              <p>Powered by AI, guided by human values</p>
            </div>
          </div>
          <div className="nav-links">
            {/* <Link to="/meet-niki" className="nav-link">
              <span className="nav-icon">✨</span>
              Meet Niki
            </Link> */}
            {/* <Link to="/assistant" className="nav-link">TalX Assistant</Link>
            <Link to="/jobs" className="nav-link">Browse Jobs</Link>
            <Link to="/features" className="nav-link">Features</Link> */}
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/login" className="login-btn">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Recruitment<br />
            Made Simple
          </h1>
          <p className="hero-subtitle">
            CareerMe is not just a tool — it's a trusted hiring companion built by HR, for HR.
            Experience seamless recruitment with our 8-step smart interview process.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/meet-niki')}>
              <span className="btn-icon">✨</span>
              Meet Miki AI
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/assistant')}>
              <span className="btn-icon">👤</span>
              Chat with CareerMe
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-tertiary" onClick={() => navigate('/jobs')}>
              <span className="btn-icon">🔍</span>
              Browse Jobs
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn btn-quaternary" onClick={() => navigate('/hr-login')}>
              <span className="btn-icon">🏢</span>
              Login as HR/Admin
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose CareerMe?</h2>
          <p className="section-subtitle">
            Revolutionize your hiring process with AI-driven insights and human-centered design
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon pink">✨</div>
              <h3>Meet Miki - AI Interviewer</h3>
              <p>
                Intelligent, polite, and adaptive virtual interviewer that conducts personalized
                video interviews and provides instant AI analysis.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">📈</div>
              <h3>Smart AI Matching</h3>
              <p>
                Advanced algorithms analyze resumes, match skills, and predict candidate success
                with 95% accuracy.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon purple">👥</div>
              <h3>8-Step Interview Flow</h3>
              <p>
                Comprehensive candidate journey from profile creation to final submission with
                AI-powered assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="statcard">
              <h3 className="stat-number">2 Days</h3>
              <p className="stat-label">Average Hiring Time</p>
            </div>
            <div className="statcard">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Match Accuracy</p>
            </div>
            <div className="statcard">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Companies Trust Us</p>
            </div>
            <div className="statcard">
              <h3 className="stat-number">50K+</h3>
              <p className="stat-label">Successful Hires</p>
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
                <h3>CareerMe</h3>
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
                <Link to="/meet-miki">AI Interviewer Miki</Link>
                <Link to="/video-interviews">Video Interviews</Link>
                <Link to="/skills-assessment">Skills Assessment</Link>
                <Link to="/analytics">Analytics</Link>
              </div>

              <div className="footer-column">
                <h4>Contact Info</h4>
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  CareerMe@gmail.com
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
            <p>© 2026 CareerMe. All rights reserved. Built with ❤️ for better hiring.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
