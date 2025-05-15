import styles from "./ingredientCard.module.css"


const products = [
    {
        name: "Niacinamide:",
        image: src=image_1,
        description: "Helps brighten skin and fade dark marks gently",
    }, 
    {
        name: "Vitamin C:",
        image: image_2,
        description: "Antioxidant that evens out skin tone",
    }, 
    {
        name: "Ceramides:",
        image: "image_1",
        description: "Calms irritation and fades post-acne spots",
    }, 
    {
        name: "Retinol:",
        image: "image_2",
        description: "A vitamin A derivative that speeds up skin cell turnover.",
    }, 
];

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
            <p className={descriptionClasses}>${description}</p>
        </button>
    );
}

export default Ingredients;

