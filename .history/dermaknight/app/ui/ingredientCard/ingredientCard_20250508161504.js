import styles from "./ingredientCard.module.css";
import Image from "next/image";

function Ingredients({ name, image, description, onClick }) {
    return (
        <button className={styles.cardButtons} onClick={onClick}>
            <div className={styles.ingredient}>
                <div className={styles.ingredientImage}>
                    <img className={styles.ingredientImage} src={image} />
                </div>
                <p className={styles.ingredient_description}>
                <span className={styles.ingredient__name}>{name}</span>{description}
                </p>
            </div>
        </button>
    );
}

export default Ingredients;

