import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Fanthom Marine</h2>
          <p>Exploring marine innovation with precision and care.</p>
        </div>

        <div className="footer-links">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@fanthommarine.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Fanthom Marine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
