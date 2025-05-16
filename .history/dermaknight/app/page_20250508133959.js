// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";

// my imports:
// import styles from "ingredientCard.module.css";
// import Product from "@/_ui/ingredientCard/ingredientCard.js";


export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Ingredient Card Test</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.ingredient}>
          {ingredients
          }
          return (
            <Ingredients

            />
          );
        </section>

      </main>

    </div>
)
}
