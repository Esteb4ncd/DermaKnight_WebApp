import React from 'react';
import styles from '@/app/quizStart/page.module.css';
import exitButton from '@/app/ui/quizComponents/ExitButton';



export default function QuizStartPage() {
    return (
        <div className='auth-container'>
            <exit/>
            <img src="/images/dermaKnight_LogoBody.svg" className={styles.logo} ></img>   
            <div>
                <p className={`${styles.textLineOne} labelSmall`}>Find the best ingredients for your skin</p>
                <p className={`${styles.textLineTwo} labelSmall`}> It will be a series of questions regarding your skin’s health and skincare habits.</p>
    
            </div>
            <button className={styles.startQuiz}>Start Quiz</button>
        </div>
    )
}