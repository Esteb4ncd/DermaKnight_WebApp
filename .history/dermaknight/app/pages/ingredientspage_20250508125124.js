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
        <div className={styles.ingredient__card}>

        </div>

    </main>

    </div>
)
}
