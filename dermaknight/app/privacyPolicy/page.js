// 'use client';
// import Link from "next/link";
// import { useRouter } from 'next/navigation';

// // Header + Sidebar + FontAwesome
// import Sidebar from "@/app/ui/Sidebar/Sidebar.js";
// import Header from "@/app/ui/header/header.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";


// export default function PrivacyPage() {
//     return <h1>Privacy Policy</h1>;
// }
import styles from '@app/privacyPolicy/page.module.css';
import Divider from '@app/ui/divider/Divider';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="auth-container">
        <h1 className={styles.header}>Privacy Policy</h1>
      <p className={styles.paragraph}>
        Welcome to DermaKnight. Your privacy matters to us, and we are committed to keeping your personal information safe. This Privacy Policy explains what data we collect, how we use it, and your rights.
      </p>

      <div className={styles.dividers}>
        <Divider />
      </div>

      <strong className={styles.strong}>1. What Information We Collect</strong>
      <p className={styles.paragraph}>When you use DermaKnight, we may collect:</p>
      <ul className={styles.list}>
        <li>Personal Information – Name, email, and any details you provide when signing up.</li>
        <li>Skin Type & Preferences – If you fill out our skincare quiz, we save your answers to personalize recommendations.</li>
        <li>Usage Data – Information on how you use our site, such as pages visited and features used.</li>
        <li>Device & Location – General device information (browser, operating system) and approximate location (if enabled).</li>
      </ul>

      <div className={styles.dividers}>
        <Divider />
      </div>

      <strong className={styles.strong}>2. How We Use Your Information</strong>
      <p className={styles.paragraph}>We use your data to:</p>
      <ul className={styles.list}>
        <li>
          <a href="#">Improve your experience and tailor recommendations.</a>
        </li>
        <li>
          <a href="#">Send important updates, skincare tips, and promotions (only if you opt in).</a>
        </li>
        <li>
          <a href="#">Maintain security and prevent fraud.</a>
        </li>
      </ul>

      <div className={styles.dividers}>
        <Divider />
      </div>

      <strong className={styles.strong}>3. Do We Share Your Data?</strong>
      <ul className={styles.list}>
        <li>We do not sell your personal information.</li>
        <li>We only share data with trusted third-party services, such as analytics tools, to help us operate DermaKnight efficiently.</li>
      </ul>

      <div className={styles.dividers}>
        <Divider />
      </div>

      <strong className={styles.strong}>Changes to This Policy</strong>
      <p className={styles.paragraph}>
        We may update this Privacy Policy as needed. If significant changes occur, we will notify you.
      </p>

      <div>
        <img src="./images/bodyLogoWithName.svg" alt="DermaKnight logo" className={styles.bodyLogo} />
      </div>
    </div>
  );
}
