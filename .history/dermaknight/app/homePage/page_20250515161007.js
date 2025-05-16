"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';
import styles from '@app/homePage/page.module.css';
import Image from 'next/image';



export default function HomePage() {
    const router = useRouter();
return (
    <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.nav}>
                <h1 className={styles.logo}> HEADER</h1>
                <div className={styles.icons}>🔍 ❤️ 👤</div>
            </div>
            </header>
        <div className={styles.quizBanner}>
          <Image src="/quiz-avatar.png" alt="Quiz Person" width={120} height={120} />
          <div className={styles.quizText}>
            <p>Skin feeling different lately?<br />Take the quiz again to update your results</p>
            <button className={styles.quizButton}>Retake Quiz</button>
          </div>
        </div>

      {/* Quiz Findings */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Quiz Findings</h2>
          <span className={styles.seeAll}>See all</span>
        </div>
        <div className={styles.findingsGrid}>
          {['Dark Spots', 'Uneven Skin Tone', 'Oily Skin'].map((label, i) => (
            <div className={styles.findingCard} key={i}>
              <Image src={`/face-${i + 1}.png`} alt={label} width={60} height={60} />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>
  );
}
