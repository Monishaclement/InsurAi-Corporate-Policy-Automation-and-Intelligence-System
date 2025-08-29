import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom"; // <- import this
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // <- initialize

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Smart Insurance Solutions Powered by AI</h1>
        <p>Easily manage your policies, submit claims, and get AI assistance anytime.</p>
        <button className="cta-btn" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="features" id="about">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="card">Easy Claim Submission</div>
          <div className="card">AI Assistance</div>
          <div className="card">Policy Management</div>
          <div className="card">24/7 Support</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="contact">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">1. Register and Login</div>
          <div className="step">2. Add Your Policies</div>
          <div className="step">3. Submit Claims & Get AI Suggestions</div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 InsureAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
