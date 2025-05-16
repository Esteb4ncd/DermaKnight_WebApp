// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Ingredient Card</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.ingredient__card}>

        </div>

      </main>

    </div>
)
}
