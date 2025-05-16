import styles from '@/app/ui/ingredientCard/ingredientCard.module.css';
import Image from "next/image";

function Ingredients({ name, image, description, onClick }) {
    return (
        <button className={styles.cardButtons} onClick={onClick}>
            <div className={styles.ingredient}>
                <div className={styles.ingredientImage}>
                    <img className={styles.ingredientImage} src={image} />
                </div>
                <p className={styles.ingredientDescription}>
                <span className={styles.ingredientName}>{name}</span>{description}
                </p>
            </div>
        </button>
    );
}

export default Ingredients;

