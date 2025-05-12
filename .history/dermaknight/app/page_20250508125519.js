// import Image from "next/image";
import styles from "./page.module.css";

// my imports:
// import styles from "ingredientCard.module.css";
// import Product from "@/_ui/ingredientCard/ingredientCard.js";


export default function IngredientPage() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Ingredient Card</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.ingredient__card}>

        </section>

      </main>

    </div>
)
}
