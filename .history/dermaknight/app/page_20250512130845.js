'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";
import {useRouter} from 'next/navigation';


const ingredients = [
  {
      key: 1,
      name: "Niacinamide:",
      image: "/ingredients/image_1.png",
      description: "Helps brighten skin and fade dark marks gently.",
    }, 
  {
    key: 2,
      name: "Vitamin C:",
      image: "/ingredients/image_2.png",
      description: "Antioxidant that evens out skin tone.",
  }, 
  {
    key: 3,
      name: "Ceramides:",
      image: "/ingredients/image_1.png",
      description: "Calms irritation and fades post-acne spots.",
  }, 
  {
    key: 4,
      name: "Retinol:",
      image: "/ingredients/image_2.png",
      description: "A vitamin A derivative that speeds up skin cell turnover.",
  }, 
  {
    key: 5,
      name: "Salicylic Acid:",
      image: "/ingredients/image_2.png",
      description: "Helps brighten skin and fade dark marks gently.",
  }, 
  {
    key: 5,
      name: "Azelaic Acid:",
      image: "/ingredients/image_1.png",
      description: "Calms irritation and fades post-acne spots.",
  }, 
];

export default function Home() {
  const router = useRouter();


  return (
    <div className={styles.authContainer}>
      <header>
        <h1>Niacinamide</h1>
      </header>

      <main>
        <section>
        <h2 style={{ "text-align": "left" }}>Overview</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
        <p style={{ "text-align": "left" , "font-weight": "bold"}}>What it is:</p>
        <ul style={{ "text-align": "left"}}>
          <li>
            A form of Vitamin B3 used in skincare.
          </li>
          <li>
            Water-soluble and works wwell for most skin types.
          </li>
          <li>
            Known for being gentle yet effective.
          </li>
        </ul>
        <p style={{ "text-align": "left" , "font-weight": "bold"}}></p>Why are They Used:<
        </section>

        <section>
        <h2 style={{ "text-align": "left" }}>Causes</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
        <ul style={{ "text-align": "left"}}>
          <li>
            Too much sun exposure (without sunscreen)
          </li>
          <li>
            Acne healing or picking at pimples
          </li>
          <li>
            Shaving cuts or skin irritation
          </li>
          <li>
            Hormones or aging
          </li>
        </ul>
        </section>



        <section className={styles.authContainer}>
        <h2 style={{ "text-align": "left" }}>Recommended Ingredients</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />

        {["Niacinamide", "Vitamin C", "Azelaic Acid"].map((key) => {
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

        </section>
      </main>
    </div>
  )
}