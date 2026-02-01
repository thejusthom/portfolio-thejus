import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../App';
import '../styles/ThemeToggle.css';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div 
      className="theme-toggle-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <button 
        className={`theme-toggle-btn ${darkMode ? 'dark' : 'light'}`}
        onClick={toggleTheme}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="toggle-track">
          <div className="toggle-icons">
            <FaSun className="toggle-icon sun" />
            <FaMoon className="toggle-icon moon" />
          </div>
          <motion.div 
            className="toggle-thumb"
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>
      </button>
    </motion.div>
  );
}