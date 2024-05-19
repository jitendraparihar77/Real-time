import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className={darkMode ? 'dark-mode' : ''}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li>
          
        </li>
        <button onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
      </ul>
      
    </nav>
  );
}

export default Navbar;
