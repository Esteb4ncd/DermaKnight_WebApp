// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";

// my imports:
// import styles from "ingredientCard.module.css";
// import Product from "@/_ui/ingredientCard/ingredientCard.js";

const products = [
  {
    name: "B",
    image: "image_2",
    description: "Helps brighten skin and fade dark marks gently",
  }, 
  {
    name: "Corned Beef",
    price: 7.99,
    image: "cornedbeef",
    hasSale: false,
    category: "meat"
  }, 
  {
    name: "Garden Peas",
    price: 5.99,
    image: "gardenpeas",
    hasSale: false,
    category: "legumes"
  }, 
  {
    name: "Hot Dogs",
    price: 3.99,
    image: "hotdogs",
    hasSale: true,
    category: "meat"
  }
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
