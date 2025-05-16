'use client';

import React from 'react';
import styles from './QuizButton.module.css'; 

export default function QuizButton({ text = "Click Me", isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.toggleButton} ${isActive ? styles.active : ''}`}
    >
      {text}
      isActive={activeButton === 'muppy'} 
      onClick={() => handleButtonClick('muppy')} 
    </button>
  );
}
