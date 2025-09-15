// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, setUser, isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <i className="fas fa-shield-alt"></i>
          <span>InsureAI</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">Home</Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="navbar-item">Dashboard</Link>
              <button onClick={() => setUser(null)} className="navbar-item">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="navbar-item">Login</Link>
              <Link to="/register" className="navbar-item">Register</Link>
            </>
          )}
          
          <button className="theme-toggle" onClick={toggleDarkMode}>
            <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;