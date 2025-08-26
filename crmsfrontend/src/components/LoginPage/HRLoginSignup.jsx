import React, { useState } from 'react';
import './HRLoginSignup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HRLoginSignup = ({ setAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, {
        email: form.email,
        password: form.password,
      });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userName', res.data.name);
      setAuth({ isAuthenticated: true, name: res.data.name });
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/signup`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert('Signup successful! Please login.');
      setIsLogin(true);
    } catch (err) {
      alert(err.response.data.message || 'Signup failed');
    }
  };

  return (
    <div className="hr-auth-page">
      <div className="auth-card">
        <div className="logo">
          <div className="logo-icon">▶</div>
          <h2>CareerMe</h2>
          <p>AI-Powered Recruitment</p>
        </div>
        <span className="welcome-badge">{isLogin ? 'Welcome Back' : 'Create Account'}</span>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-btn">
            {isLogin ? 'Sign In →' : 'Create Account →'}
          </button>
        </form>

        <div className="switch-section">
          {isLogin ? (
            <>
              <p>Don't have an account?</p>
              <button className="switch-link" onClick={() => setIsLogin(false)}>Sign Up</button>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <button className="switch-link" onClick={() => setIsLogin(true)}>Sign In</button>
            </>
          )}
        </div>
        <p className="terms-text">By continuing, you agree to our Terms of Service</p>
      </div>
    </div>
  );
};

export default HRLoginSignup;
