'use client';

import React from 'react';
import styles from '@/app/ui/quizComponents/QuizButton.module.css'; 

export default function QuizButton({ text = "Click Me", isActive, onClick, isColorSwatch = false }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.toggleButton} ${isActive ? styles.active : ''} ${isColorSwatch ? styles.colorSwatch : 'bodyMedium'}`}
      style={isColorSwatch ? { backgroundColor: `#${text}` } : {}}
    >
      {!isColorSwatch && text}
    </button>
  );
}