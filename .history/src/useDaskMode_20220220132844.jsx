import React, { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.them === 'dark'
  );

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const html = window.document.documentElement;

    const prev = isDarkMode ? 'light' : 'dark';
    html.classList.remove(prev);

    const next = isDarkMode ? 'dark' : 'light';
    html.classList.add('theme', next);

    localStorage.setItem('theme', next);
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode];
}
export default useDarkMode;
