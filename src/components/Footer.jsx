// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="footer-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
    <p>&copy; {new Date().getFullYear()} ResumeRevamp. All rights reserved.</p>
  </footer>
);

export default Footer;
