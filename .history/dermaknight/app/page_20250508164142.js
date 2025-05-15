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
      description: "Antioxidant that evens out skin tone.",
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
    <div className={styles.authContainer}>
      <header>
        <h1>(Test) Uneven Skin Tone</h1>
      </header>

      <main>
        <section>
        <h2 className={styles.categorySubheader}>Overview</h2>
        </section>

        <section className={styles.authContainer}>
        {["Niacinamide", "Vitamin C", "Ceramides"].map((key) => {
          const item = ingredients.find((i) => i.name.startsWith(key));
            return (
              <Ingredients
                key={key}
                image={item.image}
                name={item.name}
                description={item.description}
                onClick={() => router.push(`/${key.toLowerCase().replace(/\s/g, '')}`)}
              />
          );
        })}

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

        </section>
      </main>
    </div>
  )
}
