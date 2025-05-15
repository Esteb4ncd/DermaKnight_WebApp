


import styles from "./ingredientCard.module.css"

function Ingredients({ name, image, description }) {
    let ingredientType;

    if(defaultState) {
        ingredientType = styles.recommendedIngredient;
        name = "Niacinamide";
    }

    return (
        <div>
            <img className={styles.ingredient__image} src={`/${image}.jpg`} />

            <div>
                <p className={styles.ingr}>{name}</p>
                <p className={priceClasses}>${formattedPrice}</p>
            </div>
        </div>
    );
}

export default Ingredients;

