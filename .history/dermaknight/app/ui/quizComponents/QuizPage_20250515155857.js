'use client';
import {useRouter} from 'next/navigation';


import styles from '@/app/ui/quizComponents/QuizPage.module.css'; 
import { useState } from 'react';
import QuizButton from '@app';
import ProgressBar from './ProgressBar';
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
  const isSkinToneQuestion = currentQuestionData.id === 2;

  const router = useRouter();
  return (

    <div className='auth-container'>
      <div className={styles.progressBarandExitContainer}>
        <ProgressBar 
          currentQuestion={currentQuestion} 
          totalQuestions={quizQuestions.length} 
        />
        <button className={styles.exitButton} onClick={() => router.push('/homePage')}>
          <img src="/quizGraphics/exitFromQuiz.svg" alt="Exit Quiz" />
        </button>
      </div>

      <div className={styles.quizContent}>
        <p className={`h2 ${styles.quizTitle}`}>Skin Quiz</p>
        <p className={`h4 ${styles.quizQuestion}`}>{currentQuestionData.question}</p>
        <p className={`label ${styles.quizSelectOne}`}>Select One</p>
        {currentQuestionData.options.map((option) => (
          <QuizButton 
            key={option.id}
            text={option.text} 
            isActive={activeButton === option.id} 
            onClick={() => handleButtonClick(option.id)}
            isColorSwatch={isSkinToneQuestion}
          />
        ))}
      </div>

      <div className={styles.buttonsContainer}>
        <button 
          onClick={handlePreviousQuestion} 
          disabled={currentQuestion === 0} 
          className={styles.previousButton}
        >
          <img src="/quizGraphics/previousButtonQuiz.svg" alt="Previous" />
        </button>
        <button 
          onClick={handleNextQuestion} 
          disabled={!activeButton} 
          className={styles.nextButton}
        >
          {currentQuestion === quizQuestions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
} 