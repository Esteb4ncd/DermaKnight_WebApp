'use client';

import React, { useState } from 'react';
import './quizButton.module.css'; 

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
