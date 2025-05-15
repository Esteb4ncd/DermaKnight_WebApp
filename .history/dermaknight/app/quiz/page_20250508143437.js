'use client';

import { useState } from 'react';
import QuizButton from "@/app/ui/quizButton/QuizButton.js";

export default function QuizPage() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className='auth-container'>
      <h1>this is a test</h1>
      <QuizButton 
        text="oppy" 
        isActive={activeButton === 'oppy'} 
        onClick={() => handleButtonClick('oppy')} 
      />
      <QuizButton 
        text="guppy" 
        isActive={activeButton === 'guppy'} 
        onClick={() => handleButtonClick('guppy')} 
      />
      <QuizButton 
        text="muppy" 
        isActive={activeButton === 'muppy'} 
        onClick={() => handleButtonClick('muppy')} 
      />
      <QuizButton 
        text="luppy" 
        isActive={activeButton === 'luppy'} 
        onClick={() => handleButtonClick('luppy')} 
      />
    </div>
  );
}