import styles from "./ingredientCard.module.css";
import Image from "next/image";

// const ingredients = [
//     {
//         name: "Niacinamide:",
//         image: "/ingredients/image_1.png",
//         description: "Helps brighten skin and fade dark marks gently",
//     }, 
//     {
//         name: "Vitamin C:",
//         image: "/ingredients/image_2.png",
//         description: "Antioxidant that evens out skin tone",
//     }, 
//     {
//         name: "Ceramides:",
//         image: "/ingredients/image_1.png",
//         description: "Calms irritation and fades post-acne spots",
//     }, 
//     {
//         name: "Retinol:",
//         image: "/ingredients/image_2.png",
//         description: "A vitamin A derivative that speeds up skin cell turnover.",
//     }, 
// ];

function Ingredients({ name, image, description }) {
    let descriptionClasses;
    let ingredientDescription = description;

    // if(defaultState) {
    //     ingredientType = styles.recommendedIngredient;
    //     name = "Niacinamide";
    // }

    return (
        <button>
            <img className={styles.ingredient__image} src={image} />
            <p className={styles.ingredient__name}>{name}</p>
            <p className="styles."></p>
            <p className={descriptionClasses}>{description}</p>
        </button>
    );
}

export default Ingredients;

