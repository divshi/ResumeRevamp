// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-footer-background text-footer-text-color p-5 text-center transition-colors duration-300">
    <div className="flex justify-center mb-2">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-footer-text-color text-2xl mx-2 hover:text-gray-300">
        <FaFacebook />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-footer-text-color text-2xl mx-2 hover:text-gray-300">
        <FaTwitter />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-footer-text-color text-2xl mx-2 hover:text-gray-300">
        <FaLinkedin />
      </a>
    </div>
    <p>&copy; {new Date().getFullYear()} ResumeRevamp. All rights reserved.</p>
  </footer>
);

export default Footer;

