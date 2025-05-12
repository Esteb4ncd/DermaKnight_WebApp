// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";

// my imports:
// import styles from "ingredientCard.module.css";
// import Product from "@/_ui/ingredientCard/ingredientCard.js";

const products = [
  {
    name: "Niacinamide",
    image: "image_2",
    description: "Helps brighten skin and fade dark marks gently",
  }, 
  {
    name: "Vitamin C",
    image: "image_1",
    description: "Helps brighten skin and fade dark marks gently",
  }, 
  {
    name: "Niacinamide",
    image: "image_2",
    description: "Helps brighten skin and fade dark marks gently",
  }, 
  {
    name: "Niacinamide",
    image: "image_2",
    description: "Helps brighten skin and fade dark marks gently",
  }, 
];

export default function IngredientPage() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Ingredient Card</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.ingredient__card}>
          return (
            <Ingredients

            />
          )
        </section>

      </main>

    </div>
)
}
