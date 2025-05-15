'use client';

import React from 'react';
import styles from '@/app/ui';

export default function ProgressBar({ currentQuestion, totalQuestions }) {
  return (
    <div className={styles.progressCircles}>
      {Array.from({ length: totalQuestions }).map((_, index) => (
        <div 
          key={index}
          className={`${styles.progressCircle} ${
            index === currentQuestion 
              ? styles.current 
              : index < currentQuestion 
                ? styles.completed 
                : ''
          }`}
        />
      ))}
    </div>
  );
} 