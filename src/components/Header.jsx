// Header.js
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-scroll';
import logo from '../assets/logo2.png'; 

const Header = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  // Apply the theme class to the body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme); // Save theme preference
  }, [theme]);

  const handleToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
          <li><Link to="contact-us" smooth={true} duration={500}>Contact Us</Link></li>
        </ul>
        <ThemeToggle onToggle={handleToggle} />
        <img src={logo} alt="Logo" className="logo" />
      </nav>
    </header>
  );
};

export default Header;
