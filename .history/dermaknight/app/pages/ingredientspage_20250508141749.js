// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";

// my imports:
// import styles from "ingredientCard.module.css";
// import Product from "@/_ui/ingredientCard/ingredientCard.js";


const ingredients = [
    {
        name: "Niacinamide:",
        image: "/ingredients/image_1.png",
        description: "Helps brighten skin and fade dark marks gently.",
    }, 
    {
        name: "Vitamin C:",
        image: "/ingredients/image_2.png",
        description: "Antioxidant that evens out skin tone",
    }, 
    {
        name: "Ceramides:",
        image: "/ingredients/image_1.png",
        description: "Calms irritation and fades post-acne spots",
    }, 
    {
        name: "Retinol:",
        image: "/ingredients/image_2.png",
        description: "A vitamin A derivative that speeds up skin cell turnover.",
    }, 
];


export default function Home() {
    return (
        <div>
            <header className={styles.header}>
                <h1>Ingredient Card Test</h1>
            </header>

    <main className={styles.main}>
        <section className={styles.ingredient}>
            {ingredients
                .filter((ingredients) => ingredients.name === "Niacinamide:")
                .map((ingredients) => {
                
                return (
                    <Ingredients
                        image={ingredients.image}
                        name={ingredients.name}
                        description={ingredients.description}
                        />
                    )
                    }
                )}

                </section>
            </main>
        </div>
    )
}
