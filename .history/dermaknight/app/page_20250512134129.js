'use client'
// import Image from "next/image";
import styles from "./page.module.css";
import Ingredients from "./ui/ingredientCard/ingredientCard";
import {useRouter} from 'next/navigation';
import toggleDropdown from "./ui/toggleDropdown/toggleDropdown";

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

//   // Function to toggle the dropdown content
//   // This function is called when the button is clicked
//   function toggleDropdown() {
//   const content = document.getElementById('dropdownContent');
//   const buttonText = document.getElementById('buttonText');
//   const arrow = document.getElementById('arrow');

//   content.classList.toggle('hidden');
//   arrow.classList.toggle('rotated');

//   if (content.classList.contains('hidden')) {
//     buttonText.textContent = 'Read more';
//     arrow.textContent = '▶';
//   } else {
//     buttonText.textContent = 'Read less';
//     arrow.textContent = '▼';
//   }
// }

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
          <div class="dropdown-container">
            <button class="toggle-button" onclick="toggleDropdown()">
              <span id="buttonText">Read more</span>
              <span id="arrow">▶</span>
            </button>

            <div id="dropdownContent" class="hidden">
              <h3>Additional Information</h3>
              <ul>
                <li>It's water-soluble and found in both food and topical skincare.</li>
                <li>In the body, it plays a role in energy production and DNA repair.</li>
              </ul>

              <strong>It plays a role in:</strong>
              <ul>
                <li>Reducing inflammation</li>
                <li>Improving skin barrier function</li>
                <li>Regulating oil (sebum) production</li>
                <li>Reducing hyperpigmentation and redness</li>
              </ul>

              <strong>What it is:</strong>
              <ul>
                <li>A water-soluble form of Vitamin B3 (niacin)</li>
                <li>Found in foods like meat, eggs, green vegetables, and grains</li>
                <li>Used in skincare for its multi-functional benefits</li>
                <li>Suitable for most skin types, including sensitive and acne-prone</li>
              </ul>

              <strong>Why Niacinamide Is Used:</strong>
              <ul>
                <li>Strengthens the skin barrier by boosting ceramide production</li>
                <li>Helps reduce inflammation, redness, and irritation</li>
                <li>Balances oil production, ideal for oily/acne-prone skin</li>
                <li>Minimizes the appearance of pores over time</li>
                <li>Fades dark spots and evens out skin tone</li>
              </ul>
            </div>
        </div>
        </section>

        <section>
        <h2 style={{ "text-align": "left" }}>How it Works</h2>
        <hr style={{ border: "none", borderTop: "1px solid black", margin: "0.4rem 0" }} />
        <img src="></img>
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