"use client";
import React, { useState } from "react";
import {useRouter} from 'next/navigation';
import styles from '@app/homePage/page.module.css';
import Image from 'next/image';




export default function HomePage() {
    const router = useRouter();
    const handleClick = (label) => {
        if (label === 'Dark Spots') {
            router.push('/darkspots');
        } else if (label === 'Uneven Skin Tone') {
          router.push('/unevenskin'); // adjust if needed
        }
    };

return (
    <div className={styles.centeredNoPad}>
    <div className={styles.container}>
            <header className={`${styles.header} centeredNoPad`}>
                <div className={styles.nav}>
                    <h1 className={styles.logo}> EMMA HELP ME</h1>
                    <div className={styles.icons}>🔍 ❤️ 👤</div>
                </div>
            </header>
            
        <div className={styles.quizBanner}>
            <Image src="/images/quizCharacter.png" alt="Quiz Person" width={133} height={233} />
            <div className={styles.teethPatch}></div>
            <div className={styles.quizText}>
                <p className= {styles.purpleText}>Skin feeling different lately?</p>
                <p className= {styles.whiteText}>Take the quiz again to update your results</p>
                <button className={styles.quizButton}>Retake Quiz</button>
            </div>
        </div>

        {/* Quiz Findings */}
        <section className={styles.section}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.heading2}>Quiz Findings</h2>
            </div>
            <div className={styles.findingsGrid}>
                {[
                    { label: 'Dark Spots', image: 'darkspots.png' },
                    { label: 'Uneven Skin Tone', image: 'uneven.png' },
                ].map((item, i) => (
                    <div className={styles.findingCard} key={i} onClick={() => handleClick(item.label)}>
                    <Image src={`/images/${item.image}`} alt={item.label} width={74} height={74} />
                    <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Saved Categories */}
        <section className={styles.section}>
            <h2 className={styles.heading2}>Saved Categories</h2>
            <p className={styles.emptyText}>Nothing saved</p>
        </section>

        {/* Saved Ingredients */}
        <section className={styles.section}>
            <h2 className={styles.heading2}>Saved Ingredients</h2>
            <p className={styles.emptyText}>Nothing saved</p>
        </section>

        {/* Popular Articles */}
        <section className={styles.section}>
        <h2 className={styles.heading2}>Popular Articles</h2>

            <div className={styles.articleGrid}>
            {[
                {
                    label: 'Harvard Health Blog',
                    title: 'Acne: What you need to know',
                    image: '/images/harvardArticle.png',
                    link: 'https://www.health.harvard.edu/blog/acne-what-you-need-to-know-2019010315717',
                },
                {
                    label: 'AAD',
                    title: 'Skin Care Tips For Men',
                    image: '/images/manArticle.png',
                    link: 'https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-for-men',
                },
                ].map((article, i) => (
                <a
                    href={article.link}
                    key={i}
                    className={styles.articleCard}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={styles.imageOverlay}>
                    <img src={article.image} alt={article.title} />
                    <div className={styles.textOverlay}>
                        <p className={styles.label}>{article.label}</p>
                        <p className={styles.title}>{article.title}</p>
                    </div>
                    </div>
                </a>
                ))}
            </div>
        </section>
    </div>
    </div>
    );
}
