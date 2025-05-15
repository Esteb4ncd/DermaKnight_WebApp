'use client'
// import Image from "next/image";
import styles from "@/page.module.css";
import Ingredients from "@app/ui/ingredientCard/ingredientCard";
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
];


export default function Home() {
  const router = useRouter();


  return (
    <div className={styles.authContainer}>
      <header>
        <h1>Oily Skin</h1>
      </header>

      <main>
        <section>
        <h2 style={{ "text-align": "left" }}>Overview</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
        <p style={{ "text-align": "left" }}>Oily skin happens when your skin produces too much sebum (natural oil). This can make your skin look shiny, feel greasy, and lead to clogged pores or breakouts. It’s common, especially in teens and young adults.</p>
        </section>

        <section>
        <h2 style={{ "text-align": "left" }}>Causes</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
        <ul style={{ "text-align": "left"}}>
          <li>
            Genetics (some people naturally produce more oil)
          </li>
          <li>
            Hormonal changes (like puberty or stress)
          </li>
          <li>
            Using harsh cleansers that strip the skin
          </li>
          <li>
          Skipping moisturizer (yes, really! Your skin overcompensates!)
          </li>
        </ul>
        </section>



        <section className={styles.authContainer}>
        <h2 style={{ "text-align": "left" }}>Recommended Ingredients</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />

        {["Salicylic Acid", "Niacinamide"].map((key) => {
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