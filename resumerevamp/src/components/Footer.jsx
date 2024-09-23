// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="footer-icons">
      <a href="https://facebook.com"><FaFacebook /></a>
      <a href="https://twitter.com"><FaTwitter /></a>
      <a href="https://linkedin.com"><FaLinkedin /></a>
    </div>
  </footer>
);

export default Footer;
