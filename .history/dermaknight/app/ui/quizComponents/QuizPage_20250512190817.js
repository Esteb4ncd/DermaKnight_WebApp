'use client';

import styles from './QuizPage.module.css'; 
import { useState } from 'react';
import QuizButton from './QuizButton';
import { quizQuestions } from '@/app/data/quizData';

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
    <div className='auth-container quizContainer'>
      <div className={styles.progressBarandContainer}>
      <button className={styles.exitButton}>
      <img src="/quizGraphics/exitFromQuiz.svg" alt="Exit Quiz" />
      </button>
      </div>
      <p className={`h2 ${styles.quizTitle}`}>Skin Quiz</p>
      <p className={`h4 ${styles.quizQuestion}`}>{currentQuestionData.question}</p>
      <p className={`labelSmall ${styles.quizSelectOne}`}>Select One</p>
      {currentQuestionData.options.map((option) => (
        <QuizButton 
          key={option.id}
          text={option.text} 
          isActive={activeButton === option.id} 
          onClick={() => handleButtonClick(option.id)} 
        />
      ))}
      <div className={styles.buttonsContainer}>
        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0} className={styles.previousButton}>
           <img src="/quizGraphics/previousButtonQuiz.svg" alt="Previous" />
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestion === quizQuestions.length - 1} className={styles.nextButton}>
          Next
        </button>
      </div>
    </div>
  );
} 