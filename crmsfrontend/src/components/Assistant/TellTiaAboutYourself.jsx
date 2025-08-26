import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TellTiaAboutYourself.css';

const TellMiaAboutYourself = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    resume: null,
    jobDescription: '',
    linkedinURL: '',
    interviewLanguage: 'English',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="tia-page">
      <div className="tia-header">
        <span className="person-icon">👤</span>
        <h1>Tell Mia About Yourself</h1>
        <p className="subtext">Please provide your information so Mia can personalize your interview experience</p>
      </div>
      <div className="tia-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Resume Upload * (PDF or DOC)</label>
            <div className="upload-box">
              <span className="upload-icon">📤</span>
              <p>Drag and drop your resume here, or</p>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
              <button type="button">Browse Files</button>
            </div>
          </div>
          <div className="form-group">
            <label>Job Description *</label>
            <textarea
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>LinkedIn URL (Optional)</label>
            <input
              type="url"
              name="linkedinURL"
              value={formData.linkedinURL}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Interview Language *</label>
            <select
              name="interviewLanguage"
              value={formData.interviewLanguage}
              onChange={handleChange}
              required
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="form-group consent">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              Video Recording Consent *
              <p>I consent to video recording of my interview for evaluation purposes. The recording will only be shared with authorized HR personnel.</p>
            </label>
          </div>
          <div className="form-group privacy">
            <span className="lock-icon">🔒</span>
            <p>Privacy & Security<br />Your information is encrypted and stored securely. Only authorized personnel can access your interview data. You can request deletion of your data at any time.</p>
          </div>
          <div className="button-group">
                        <Link to="/meet-niki" className="link-button">
              <button type="button" className="back-btn">Back</button>
            </Link>
            <Link to="/niki-meet" className="link-button">
              <button type="submit" className="begin-btn">Begin Interview with Tia</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TellMiaAboutYourself;