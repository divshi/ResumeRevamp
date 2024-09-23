// ThemeToggle.js
import React from 'react';
import { FaSun } from 'react-icons/fa'; // Using a sun icon for theme toggle

const ThemeToggle = ({ onToggle }) => (
  <button onClick={onToggle} className="theme-toggle">
    <FaSun />
  </button>
);

export default ThemeToggle;
