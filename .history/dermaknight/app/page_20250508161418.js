'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";
import {useRouter} from 'next/navigation';


const ingredients = [
  {
      name: "Niacinamide:",
      image: "/ingredients/image_1.png",
      description: "Helps brighten skin and fade dark marks gently.",
    }, 
  {
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
  const router = useRouter();


  return (
    <div className={styles.auth_container}>
      <header>
        <h1>(Test) Uneven Skin Tone</h1>
      </header>

      <main>
        <section>
        <h2 className={styles.categorySubheader}>Overview</h2>
        </section>

        <section className={styles.auth_container}>

            {ingredients
              .filter((ingredients) => ingredients.name === "Niacinamide:")
              .map((ingredients) => {
                
                return (
                  <Ingredients
                    image={ingredients.image}
                    name={ingredients.name}
                    description={ingredients.description}
                    onClick={() => router.push('/niacinamide')}
                  />
                )
              }
            )}

{ingredients
            .filter((ingredients) => ingredients.name === "Vitamin C:")
            .map((ingredients) => {
              
              return (
                <Ingredients
                image={ingredients.image}
                name={ingredients.name}
                description={ingredients.description}
                onClick={() => router.push('/vitaminc')}
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
                  onClick={() => router.push('/ceramides')}
                />
              )
            }
          )}

        </section>
      </main>
    </div>
  )
}
