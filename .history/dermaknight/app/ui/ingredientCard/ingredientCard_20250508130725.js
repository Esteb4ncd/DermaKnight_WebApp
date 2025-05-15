import styles from "./ingredientCard.module.css"



function Ingredients({ name, image, description }) {
    let descriptionClasses;
    let ingredientDescription = description;

    // if(defaultState) {
    //     ingredientType = styles.recommendedIngredient;
    //     name = "Niacinamide";
    // }

    return (
        <button>
            

            <div>
                <p className={styles.ingredient__name}>{name}</p>
                <p className={descriptionClasses}>${description}</p>
            </div>
        </button>
    );
}

export default Ingredients;

