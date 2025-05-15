'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";
import {useRouter} from 'next/navigation';
import ToggleDropdown from "./ui/toggleDropdown/toggleDropdown";

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
  // Add the Header here
    <div className={styles.authContainer}>
        <header>
            <h1>Niacinamide</h1>
        </header>

    <main>

{/* Overview Section */}
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
        <br></br>
        <p style={{ "text-align": "left" , "font-weight": "bold"}}>Why are They Used:</p>
            <ul style={{ "text-align": "left"}}>
                <li>
                    Strengthens the skin barrier to retain moisture.
                </li>
                <li>
                    Helps reduce redness and inflammation.
                </li>
                <li>
                    Regulates oil production, making it great for oily or acne-prone skin.
                </li>
                <li>
                    Minimizes the appearance of pores over time.
                </li>
                <li>
                    Fades dark spots and improves uneven skin tone.
                </li>
                <li>
                    Provides antioxidant protection against environmental stress.
                </li>
            </ul>
        </section>


{/* Toggled Section */}
        <section>
            <ToggleDropdown />
        </section>

{/* How It Works Section */}
        <section>
            <h2 style={{ "text-align": "left" }}>How it Works</h2>
            <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
            <img src="/ingredients/niacinamide.png"></img>
        </section>

{/* Not Recommended Section */}
        <section className={styles.authContainer}>
            <h2 style={{ "text-align": "left" }}>Do Not Combine With</h2>
            <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />

        {["Vitamin C"].map((key) => {
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

{/* Recommended Section */}
        <section className={styles.authContainer}>
        <h2 style={{ "text-align": "left" }}>Recommended Ingredients</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />

        {["Ceramides"].map((key) => {
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