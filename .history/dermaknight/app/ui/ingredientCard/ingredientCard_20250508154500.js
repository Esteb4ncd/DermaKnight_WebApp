import styles from "./ingredientCard.module.css";
import Image from "next/image";

function Ingredients({ name, image, description, onClick }) {
    return (
        <button className={styles.card_buttons} onClick={}>
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

