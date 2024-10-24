import React from 'react';
import './Footer.css'; // Make sure you have this CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p6>
            We are a market leader in the potato industry, offering sustainable and innovative products. Our goal is to bridge the gap between producers and consumers.
          </p6>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/AboutUS">About Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/Contact1">Contact Us</a></li>
            <li><a href="/Gallery">Gallery</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p6>Email: info@agpotato.com</p6>
          <p6>Phone: +1 800 123 4567</p6>
          <p6>Address: World Trade Centre, Unit No 2217, 22nd Floor, Malleshwaram (W), Next Orion Mall, Bangalore, Karnataka 560055, IN</p6>
          {/* Move social icons here */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p6>&copy; 2024 Agpotato. All rights reserved.</p6>
      </div>
    </footer>
  );
};
export default Footer;