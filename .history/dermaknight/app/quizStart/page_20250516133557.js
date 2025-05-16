import React from 'react';
import styles from '@/app/quizStart/page.module.css';



export default function QuizStartPage() {
    return (
        <div className='auth-container'>

            <img src="/images/dermaKnight_LogoBody.svg" className={styles.logo} ></img>   
            <div>
                <p className={text.styles}>Find the best ingredients for your skin It will be a series of questions regarding your skin’s health and skincare habits.</p>
                <p>It will be a series of questions regarding your skin’s health and skincare habits.</p>
            </div>
            <button className={styles.startQuiz}>Start Quiz</button>
        </div>
    )
}