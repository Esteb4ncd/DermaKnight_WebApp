"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';
import styles from '@app/homePage/page.module.css';


export default function HomePage() {
    const router = useRouter();
return (
    <div className={styles.container}>
      {/* Top Banner */}
        <header className={styles.header}>
        <div className={styles.nav}>
          <h1 className={styles.logo}>🐾 DermaKnight</h1>
          <div className={styles.icons}>🔍 ❤️ 👤</div>
        </div>

        <div className={styles.quizBanner}>
          <Image src="/quiz-avatar.png" alt="Quiz Person" width={120} height={120} />
          <div className={styles.quizText}>
            <p>Skin feeling different lately?<br />Take the quiz again to update your results</p>
            <button className={styles.quizButton}>Retake Quiz</button>
          </div>
        </div>
      </header>

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

      {/* Saved Categories */}
      <section className={styles.section}>
        <h2>Saved Categories</h2>
        <p className={styles.emptyText}>Nothing saved</p>
      </section>

      {/* Saved Ingredients */}
      <section className={styles.section}>
        <h2>Saved Ingredients</h2>
        <p className={styles.emptyText}>Nothing saved</p>
      </section>

      {/* Notification */}
      <div className={styles.snackbar}>
        <Image src="/cookie.png" alt="Icon" width={40} height={40} />
        <span>Quiz Results Saved! <br />Find results under Quiz Findings</span>
        <button className={styles.snackButton}>See Results</button>
      </div>

      {/* Popular Articles */}
      <section className={styles.section}>
        <h2>Popular Articles</h2>
        <div className={styles.articleCard}>
          <Image src="/article-1.jpg" alt="Acne blog" width={400} height={200} />
          <p><strong>Harvard health Blog</strong><br />Acne: What you need to know</p>
        </div>
        <div className={styles.articleCard}>
          <Image src="/article-2.jpg" alt="Men skincare" width={400} height={200} />
          <p><strong>AAD</strong><br />Skin Care Tips For Men</p>
        </div>
      </section>
    </div>
  );
}
