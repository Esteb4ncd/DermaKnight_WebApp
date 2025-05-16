'use client';
import {useRouter} from 'next/navigation';

import React from 'react';
import styles from '@/app/quizStart/page.module.css';
import ExitButton from '@/app/ui/quizComponents/ExitButton';



export default function QuizStartPage() {
    const router = useRouter();
    
    return (
        <div className={`${styles.background} auth-container`}>
            <div className={styles.exitButtonContainer}>
            <ExitButton className={styles.exitButton}/>
            </div>
            <img src="/images/dermaKnight_LogoBody.svg" className={styles.logo} ></img>   
            <div>
                <p className={`${styles.textLineOne} labelSmall`}>Find the best ingredients for your skin</p>
                <p className={`${styles.textLineTwo} labelSmall`}> It will be a series of questions regarding your skin’s health and skincare habits.</p>
    
            </div>
            <button className={styles.startQuizButton} onClick={() => router.push('/homePage')]>Start Quiz</button>
        </div>
    )
}