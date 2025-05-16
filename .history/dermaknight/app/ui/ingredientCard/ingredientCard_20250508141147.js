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
    return (
        <button>
            <div className={styles.ingredient}>
                <div className={styles.ingredient__image}>
                    <img className={styles.ingredient__image} src={image} />
                </div>
                <p className={styles.ingredient_description}>
                <span className={styles.ingredient__name}>{name}</span>{description}
                </p>
            </div>
        </button>
    );
}

export default Ingredients;

