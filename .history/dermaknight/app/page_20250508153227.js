// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";
import Link from 'next/link';

<IngredientCard
  key={i}
  image={item.image}
  name={item.name}
  description={item.description}
  link={`/ingredients/${item.name.toLowerCase().replace(/[^a-z]/g, "")}`}
/>

const ingredients = [
  {
      key={1}
      name: "Niacinamide:",
      image: "/ingredients/image_1.png",
      description: "Helps brighten skin and fade dark marks gently.",
  }, 
  {
      key={2}
      name: "Vitamin C:",
      image: "/ingredients/image_2.png",
      description: "Antioxidant that evens out skin tone and boosts collagen production.",
  }, 
  {
      name: "Ceramides:",
      image: "/ingredients/image_1.png",
      description: "Calms irritation and fades post-acne spots.",
  }, 
  {
      name: "Retinol:",
      image: "/ingredients/image_2.png",
      description: "A vitamin A derivative that speeds up skin cell turnover.",
  }, 
];


export default function Home() {
  return (
    <div className={styles.auth_container}>
      <header>
        <h1>(Test) Uneven Skin Tone</h1>
      </header>

      <main>
        <section>
        <h2 className={styles.category_subheader}>Overview</h2>
        </section>

        <section className={styles.auth_container}>

          <Link href={link} className={styles.cardLink}>
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
          </Link>

{ingredients
            .filter((ingredients) => ingredients.name === "Vitamin C:")
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

{ingredients
            .filter((ingredients) => ingredients.name === "Ceramides:")
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
