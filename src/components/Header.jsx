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
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${theme === 'light' ? 'bg-blue-200 text-gray-800' : 'bg-blue-900 text-gray-200'}`}>
    <nav className="flex flex-nowrap px-0 py-3 ">
        <ul className="flex flex-grow justify-start m-1 list-none overflow-hidden">
          <li className=" sm:mx-4"><Link to="home" smooth={true} duration={500} className="text-sm sm:text-lg hover:underline">Home</Link></li>
          <li className=" sm:mx-4"><Link to="about-us" smooth={true} duration={500} className="text-sm sm:text-lg hover:underline">About Us</Link></li>
          <li className=" sm:mx-4"><Link to="services" smooth={true} duration={500} className="text-sm sm:text-lg hover:underline">Services</Link></li>
          <li className=" sm:mx-4"><Link to="testimonials" smooth={true} duration={500} className="text-sm sm:text-lg hover:underline">Testimonials</Link></li>
          <li className=" sm:mx-4"><Link to="contact-us" smooth={true} duration={500} className="text-sm sm:text-lg hover:underline">Contact Us</Link></li>
        </ul>
      <div className="flex items-center space-x-1.5 sm:space-x-40 mr-4 sm:mr-12">
        <ThemeToggle onToggle={handleToggle} className="bg-transparent border-none text-sm sm:text-lg cursor-pointer" />
        <img src={logo} alt="Logo" className="h-7" />
      </div>
    </nav>
  </header>
  
  );
};

export default Header;
