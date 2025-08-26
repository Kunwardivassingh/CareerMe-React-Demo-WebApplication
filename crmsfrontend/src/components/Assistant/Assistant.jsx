import React from 'react';
import './Assistant.css';
import { Link } from 'react-router-dom';

const Assistant = () => {
  return (
    <div className="assistant-page">
      <div className="assistant-header">
        <h1>CareerMe AI Assistant</h1>
        <p>Your conversational HR companion</p>
        <div className="header-buttons">
        <Link to="/login">
          <button>My Portal</button>
        </Link>      
        <Link to="/jobs">
          <button>Browse Jobs</button>
        </Link>        </div>
      </div>

      <div className="assistant-card">
        <div className="assistant-icon">💼</div>
        <h2>Welcome to CareerMe!</h2>
        <p>
          I'm CareerMe, your AI assistant here to help you navigate your job search and application process. How can I assist you today?
        </p>
        <button className="powered-btn">Powered by Advanced AI • Voice & Text Support</button>
      </div>

      <div className="assistant-options">
        <div className="option-card blue">
          <h3>Onboarding Guide</h3>
          <p>Get introduced to our hiring process</p>
        </div>
        <div className="option-card green">
          <h3>Interview Practice</h3>
          <p>Practice with AI interviewer</p>
        </div>
        <div className="option-card purple">
          <h3>Support & FAQ</h3>
          <p>Get help with any questions</p>
        </div>
        <div className="option-card orange">
          <h3>General Chat</h3>
          <p>Open conversation with TalX</p>
        </div>
      </div>

      <div className="quick-guide">
        <h3>💬 Quick Start Guide</h3>
        <div className="quick-cards">
          <div className="quick-card">
            <h4>Choose Your Path</h4>
            <p>Select the type of assistance you need</p>
          </div>
          <div className="quick-card">
            <h4>Start Chatting</h4>
            <p>Use voice or text to communicate</p>
          </div>
          <div className="quick-card">
            <h4>Get Support</h4>
            <p>Receive personalized guidance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
