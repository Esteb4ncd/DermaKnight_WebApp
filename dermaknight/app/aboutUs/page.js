'use client';
import styles from '@app/aboutUs/page.module.css';

export default function AboutUs() {
  return (
    <div className='auth-container'>
      <div className={`${styles.textContainer} ${styles.intro}`}>
        <h1>About Us</h1>
        <p>
          At DermaKnight, we believe skincare shouldn't be complicated, confusing, or time-consuming.
          That’s why we’ve built an easy-to-use web app designed specifically for Gen Z men who want
          to level up their skincare game without the guesswork.
        </p>
      </div>

      <div className={styles.divider}></div>

      <div className={`${styles.textContainer} ${styles.ourMission}`}>
        <h3>Our Mission</h3>
        <p>
          Skincare isn’t just about looking good, it’s about feeling confident in your skin. Whether
          you’re dealing with acne, dryness, oiliness, or just want to maintain a fresh and healthy
          look, DermaKnight provides personalized skincare routines, expert tips, and product
          recommendations that fit your lifestyle.
        </p>
      </div>


        <img src="./images/bodyLogoWithName.svg" alt="Body Logo With Name" className={styles.bodyLogo}></img>

      <div className={styles.divider}></div>


      <div className={`${styles.textContainer} ${styles.whyDermaKnight}`}>
        <h3>Why DermaKnight?</h3>
        <ul>
          <li>
            <strong>Tailored for You –</strong> We analyze your skin type and concerns to create a custom
            skincare routine that actually works.
          </li>
          <li>
            <strong>Simple & Effective –</strong> No 10-step routines, just the essentials that deliver real results.
          </li>
          <li>
            <strong>No BS, Just Science –</strong> We break down skincare myths and give you straightforward,
            science-backed advice so you can make the best choices for your skin.
          </li>
          <li>
            <strong>For Every Skin Type –</strong> Whether you have dry, oily, sensitive, or combination skin,
            we’ve got you covered.
          </li>
        </ul>
      </div>
    </div>
  );
}
