'use client';
import styles from '@/app/ui/quizComponents/ExitButton.module.css';
import { useRouter } from 'next/navigation';
import React from 'react';

'use client';
import {useRouter} from 'next/navigation';


export default function ExitButton() {
    return(
        <div>

<button className={styles.exitButton} onClick={() => router.push('/homePage')}>
<img src="/quizGraphics/exitFromQuiz.svg" alt="Exit Quiz" />
</button>
        </div>
    )
}