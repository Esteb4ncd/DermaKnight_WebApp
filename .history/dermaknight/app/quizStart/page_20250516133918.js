import React from 'react';
import styles from '@/app/quizStart/page.module.css';



export default function QuizStartPage() {
    return (
        <div className='auth-container'>

            <img src="/images/dermaKnight_LogoBody.svg" className={styles.logo} ></img>   
            <div>
                <p className={styles.textLineOne}>Find the best ingredients for your skin</p>
                
    
            </div>
            <button className={styles.startQuiz}>Start Quiz</button>
        </div>
    )
}