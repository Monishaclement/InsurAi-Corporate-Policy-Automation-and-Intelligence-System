// src/pages/user/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Simulate login
      setUser({
        name: 'John Doe',
        email: formData.email,
        role: 'user'
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleDemoLogin = (role) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUser({
        name: role === 'admin' ? 'Admin User' : 'Demo User',
        email: role === 'admin' ? 'admin@insureai.com' : 'demo@insureai.com',
        role: role
      });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <a href="/forgot-password" className="forgot-link">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="demo-login-section">
          <p className="demo-divider">Or try a demo account</p>
          <div className="demo-buttons">
            <button 
              type="button" 
              className="demo-btn user-demo"
              onClick={() => handleDemoLogin('user')}
              disabled={isLoading}
            >
              <i className="fas fa-user"></i>
              User Demo
            </button>
            <button 
              type="button" 
              className="demo-btn admin-demo"
              onClick={() => handleDemoLogin('admin')}
              disabled={isLoading}
            >
              <i className="fas fa-cog"></i>
              Admin Demo
            </button>
          </div>
        </div>

        <div className="auth-footer">
          <p>Don't have an account? <a href="/register">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;