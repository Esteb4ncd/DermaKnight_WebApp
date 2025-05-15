'use client';

import React, { useState } from 'react';
import styles from './QuizButton.module.css'; 

export default function QuizButton() {
  const [isActive, setIsActive] = useState(false);

  const toggleColor = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={toggleColor}
      className={`${styles.toggleButton} ${isActive ? styles.active : ''}`}
    >
      {text}
    </button>
  );
}
