'use client'; // Only for Next.js App Router

import React, { useState } from 'react';
import './ColorToggleButton.css'; // Import the CSS file

export default function ColorToggleButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleColor = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={toggleColor}
      className={`toggle-button ${isActive ? 'active' : ''}`}
    >
      Click Me
    </button>
  );
}
