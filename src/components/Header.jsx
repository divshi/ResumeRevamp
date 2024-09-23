// Header.jsx
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [theme, setTheme] = useState('light');

  const handleToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.className = theme; // Apply the theme to the body
  };

  return (
    <header className={`header ${theme}`}>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#make-resume">Make Resume</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>
        <ThemeToggle onToggle={handleToggle} />
        <img src="/path-to-logo.png" alt="Logo" className="logo" />
      </nav>
    </header>
  );
};

export default Header;
