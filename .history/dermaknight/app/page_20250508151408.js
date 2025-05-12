'use client';

import { useState } from 'react';
import './page.module.css'
import QuizButton from './ui/quizButton/QuizButton.js';
import { quizQuestions } from './data/quizData';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [answers, setAnswers] = useState({});

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setAnswers({
      ...answers,
      [currentQuestion]: buttonId
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setActiveButton(answers[currentQuestion + 1] || null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setActiveButton(answers[currentQuestion - 1] || null);
    }
  };

  const currentQuestionData = quizQuestions[currentQuestion];

  return (
    <div >
      <h1>Question {currentQuestion + 1}</h1>
      <h2>{currentQuestionData.question}</h2>
      {currentQuestionData.options.map((option) => (
        <QuizButton 
          key={option.id}
          text={option.text} 
          isActive={activeButton === option.id} 
          onClick={() => handleButtonClick(option.id)} 
        />
      ))}
      <div>
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestion === quizQuestions.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}