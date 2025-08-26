import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginSignup = ({ setAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
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

      // ✅ Check response before using
      if (res && res.data) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userName', res.data.name);
        setAuth({ isAuthenticated: true, name: res.data.name });
        navigate('/dashboard');
      } else {
        alert('Login failed: No data received.');
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Login failed. Please try again.");
      }
      console.error("Login error:", err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/signup`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert('Signup successful! Please login.');
      setIsLogin(true);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Signup failed. Please try again.");
      }
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>{isLogin ? 'Login to TalentX9' : 'Create Your Account'}</h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit" className="btn-submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            type="button"
            className="switch-btn"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
