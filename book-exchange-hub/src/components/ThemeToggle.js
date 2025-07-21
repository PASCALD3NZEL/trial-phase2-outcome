import React from 'react';

function ThemeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button 
      onClick={toggleDarkMode} 
      className="theme-toggle"
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;