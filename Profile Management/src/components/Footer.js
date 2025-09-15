// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} InsureAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;