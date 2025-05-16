
import styles from "./ingredientCard.module.css"



function Ingredients({ name, image, description }) {
    let descriptionClasses;
    let niacinamideDescription = description;

    if(defaultState) {
        ingredientType = styles.recommendedIngredient;
        name = "Niacinamide";
    }

    return (
        <div>
            <img className={styles.ingredient__image} src={`/${image}.jpg`} />

            <div>
                <p className={styles.ingredient__name}>{name}</p>
                <p className={descriptionClasses}>${niacinamideDescription}</p>
            </div>
        </div>
    );
}

export default Ingredients;

