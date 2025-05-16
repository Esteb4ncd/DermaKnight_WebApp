
import styles from '@/app/quizStart/page.module.css';
import { useRouter } from 'next/navigation';
import React from 'react';


export default function QuizStartPage() {
    return (
        <div className='auth-container'>
                    <button className={styles.exitButton} onClick={() => router.push('/homePage')}>
          <img src="/quizGraphics/exitFromQuiz.svg" alt="Exit Quiz" />
        </button>
            <img src="/images/dermaKnight_LogoBody.svg" ></img>   
            <div>
                <p>Find the best ingredients for your skin</p>
                <p>It will be a series of questions regarding your skin’s health and skincare habits.</p>
            </div>
            <button className={styles.startQuiz}>Start Quiz</button>
        </div>
    )
}