'use client';
import styles from './results.module.css';
import { useRouter } from 'next/navigation';

export default function ResultsPage() {
    const router = useRouter();

    const handleSave = () => {
    // You can add saving logic here if needed
    router.push('/'); // or wherever you want to navigate next
    };

return (
    <div className={styles.container}>
        <h2 className={styles.header}>These are our top recommendations for you</h2>

        <section className={styles.resultBlock}>
            <h3 className={styles.title}>Dark Spots</h3>
            <div className={styles.card}>
                <span className={styles.ingredient}>Vitamin C</span>
                <p><strong>Benefits:</strong> Brightens skin, fades pigmentation, protects against sun damage.</p>
            </div>
        </section>

        <section className={styles.resultBlock}>
            <h3 className={styles.title}>Uneven Skin Tone</h3>
                <div className={styles.card}>
                <span className={styles.ingredient}>Azelaic Acid</span>
                <p><strong>Benefits:</strong> Reduces pigmentation, fights acne, calms redness (rosacea-friendly).</p>
                </div>
        </section>

        <section className={styles.resultBlock}>
            <h3 className={styles.title}>Oily Skin</h3>
            <div className={styles.card}>
            <span className={styles.ingredient}>Niacinamide</span>
            <p><strong>Benefits:</strong> Brightens skin, reduces redness, controls oil, minimizes pores.</p>
            </div>
        </section>

        <button className={styles.saveButton} onClick={handleSave}>
            Save Results
        </button>
        </div>
    );
    }
