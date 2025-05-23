'use client'
// import Image from "next/image";
// import styles from "@/app/page.module.css";
// import Ingredients from "@/app/ui/ingredientCard/ingredientCard";

// import styles from "./page.module.css";
import Ingredients from "@app//ui/ingredientCard/ingredientCard";

import {useRouter} from 'next/navigation';

// KEEP THESE LINES FOR THE HEADER TO WORK
// import the header component
import Sidebar from "@app/ui/Sidebar/Sidebar.js";
import Header from "@app/ui/header/header.js";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
// ^^^^ KEEP THESE LINES FOR THE HEADER TO WORK ^^^^


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
            <div>
                <header>
                    <Header />
                </header>


    <div className="auth-container">
        <h1>Dark Spots</h1>

      <main>
        <section>
        <h3 style={{ "text-align": "left" }}>Overview</h3>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
        <p style={{ "text-align": "left" }}>Dark spots are flat marks on the skin that show up when your skin makes too much pigment. This can happen after sun damage, acne, or cuts. They're also called hyperpigmentation.</p>
        </section>

        <section>
        <h3 style={{ "text-align": "left" }}>Causes</h3>
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



        <section>
        <h3 style={{ "text-align": "left" }}>Recommended Ingredients</h3>
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
    </div>
  )
}