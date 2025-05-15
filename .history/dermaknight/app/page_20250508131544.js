// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";

// my imports:
// import styles from "ingredientCard.module.css";
// import Product from "@/_ui/ingredientCard/ingredientCard.js";

const products = [
  {
    name: "Niacinamide:",
    image: "image_1",
    description: "Helps brighten skin and fade dark marks gently",
  }, 
  {
    name: "Vitamin C:",
    image: "image_2",
    description: "Antioxidant that evens out skin tone",
  }, 
  {
    name: "Ceramides:",
    image: "image_1",
    description: "Calms irritation and fades post-acne spots",
  }, 
  {
    name: "Retinol:",
    image: "image_2",
    description: "A vitamin A derivative that speeds up skin cell turnover.",
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
          );
        </section>

      </main>

    </div>
)
}
