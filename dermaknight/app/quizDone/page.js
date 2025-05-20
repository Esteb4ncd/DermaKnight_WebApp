'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/quizDone/page.module.css";

export default function QuizDone() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/quizResults');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <div className={`auth-container ${styles.container}`}>
      <div className={styles.logo}>
        <img src="./images/LogoWithOnlyBody.svg" alt="Logo" />
      </div>
      <h2 className={styles.text}>Finding your custom ingredients...</h2>
      <div className={styles.loadingDots}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
      </div>

    </div>
  );
}
