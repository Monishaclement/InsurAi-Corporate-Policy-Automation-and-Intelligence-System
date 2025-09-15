// src/pages/Homepage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InsuranceCalculator from '../components/InsuranceCalculator'; 
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/register');
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Intelligent Insurance for the Modern World</h1>
          <p>InsureAI combines cutting-edge technology with comprehensive insurance coverage to protect what matters most to you.</p>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
      <section className="tools-section">
        <div className="container">
          <h2>Interactive Insurance Tools</h2>
          <p>Explore our tools to understand your insurance needs better</p>
          
          <div className="tools-grid">
            <InsuranceCalculator /> {/* Add this component */}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose InsureAI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI-Powered</h3>
              <p>Our advanced algorithms provide personalized coverage recommendations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Secure & Reliable</h3>
              <p>Bank-level security ensures your data is always protected.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3>Affordable Premiums</h3>
              <p>Get comprehensive coverage at competitive prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Protected?</h2>
          <button className="cta-button" onClick={handleGetStarted}>
            Get Started Today
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;