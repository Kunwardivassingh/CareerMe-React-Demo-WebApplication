import React from 'react';
import { Link } from 'react-router-dom';
import './NikiInterviewer.css';

const MikiInterviewer = () => {
  return (
    <div className="niki-page">
      <header className="niki-header">
        <div className="logo-icon">✨</div>
        <h2>CareerMe Platform</h2>
        <p>Powered by AI, guided by human values</p>
      </header>

      <div className="niki-card">
        <div className="niki-avatar">👤</div>
        <h3>Hi, I'm Miki — your CareerMe AI interviewer! 👋</h3>
        <p>
          I'll guide you through a short, smart interview to help match you to the right job.
        </p>

        <div className="niki-features">
          <div className="feature-box pink">🎥<br />Video Interview<br /><small>AI-powered adaptive questions</small></div>
          <div className="feature-box blue">🧠<br />Smart Analysis<br /><small>Real-time evaluation & feedback</small></div>
          <div className="feature-box purple">⏱<br />Quick Process<br /><small>15-20 minutes total</small></div>
        </div>

        <div className="action-buttons">
         <Link to="/tell-tia" className="link-button">
          <button className="btn-start">▶ Start Interview</button>
        </Link>
        <Link to="/more-info" className="link-button">
          <button className="btn-more">ℹ More Info</button>
        </Link>
        <Link to="/schedule" className="link-button">
          <button className="btn-schedule">📅 Schedule for Later</button>
        </Link>
        </div>

        <div className="expect-box">
          <h4>✅ What to Expect</h4>
          <ul>
            <li>Personalized questions based on your resume</li>
            <li>Instant AI-powered feedback</li>
            <li>Multiple language support</li>
            <li>Save & continue later option</li>
          </ul>
        </div>

        <p className="privacy-note">🔒 Your privacy is protected. Interviews are securely recorded and shared only with authorized HR personnel.</p>
      </div>

      <footer className="niki-footer">
        <p>🚀 Powered by CareerMe AI Technology</p>
      </footer>
    </div>
  );
};

export default MikiInterviewer;
