
import React from "react";

import styles from '@app/termsOfServices/page.module.css';


const TermsOfService = () => {
  return (
    <div className="auth-container">
      <h1 className={styles.header}>Terms Of Services</h1>

      <p className={styles.text}>
        Welcome to DermaKnight. By using our website and services, you agree to these Terms of Service. Please read them carefully.
      </p>

      <h2 className={styles.subHeader}>1. Acceptance of Terms</h2>
      <ul className={styles.text__ul}>
        <li>By accessing or using DermaKnight, you agree to follow these terms. If you do not agree, please do not use our services.</li>
      </ul>

      <h2 className={styles.subHeader}>2. Who Can Use DermaKnight</h2>
      <ul className={styles.text__ul}>
        <li>You must be at least 13 years old to use our services.</li>
        <li>You agree to provide accurate information when signing up and using our platform.</li>
      </ul>

      <h2 className={styles.subHeader}>3. Your Responsibilities</h2>
      <ul className={styles.text__ul}>
        <li>You are responsible for keeping your account secure.</li>
        <li>You agree to use DermaKnight for personal, non-commercial purposes.</li>
        <li>You will not misuse our services, including attempting to hack, disrupt, or copy our content without permission.</li>
      </ul>

      <h2 className={styles.subHeader}>4. Content and Ownership</h2>
      <ul className={styles.text__ul}>
        <li>All content on DermaKnight, including text, graphics, and software, is owned by us or our partners. You may not copy, distribute, or modify any part of our platform without permission.</li>
        <li>If you submit content (such as reviews or feedback), you grant us a non-exclusive right to use it to improve our services.</li>
      </ul>

      <h2 className={styles.subHeader}>5. Third-Party Links and Services</h2>
      <ul className={styles.text__ul}>
        <li>Our platform may include links to third-party websites or services. We are not responsible for their content, policies, or practices. Use them at your own risk.</li>
      </ul>

      <h2 className={styles.subHeader}>6. No Medical Advice</h2>
      <ul className={styles.text__ul}>
        <li>DermaKnight provides skincare tips and recommendations, but we do not offer medical advice. Always consult a dermatologist or healthcare professional for serious skin concerns.</li>
      </ul>

      <h2 className={styles.subHeader}>7. Account Termination</h2>
      <ul className={styles.text__ul}>
        <li>We may suspend or terminate your account if you violate these terms or misuse our services. You can also delete your account at any time.</li>
      </ul>

      <h2 className={styles.subHeader}>8. Limitation of Liability</h2>
      <ul className={styles.text__ul}>
        <li>We do our best to keep DermaKnight running smoothly, but we cannot guarantee that everything will always work perfectly.</li>
        <li>We are not responsible for any damages, data losses, or issues that arise from using our services.</li>
      </ul>

      <h2 className={styles.subHeader}>9. Changes to These Terms</h2>
      <ul className={styles.text__ul}>
        <li>We may update these Terms of Service from time to time. If major changes occur, we will notify users. Continued use of DermaKnight means you accept the updated terms.</li>
      </ul>

      <div>
        <img src="./images/bodyLogoWithName.svg" alt="DermaKnight Logo" className={styles.bodyLogo} />
      </div>
    </div>
  );
};

export default TermsOfService;


