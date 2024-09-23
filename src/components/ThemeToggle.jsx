// ThemeToggle.js
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ onToggle }) => {
  const currentTheme = document.body.className;

  return (
    <button onClick={onToggle} className="theme-toggle">
      {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
