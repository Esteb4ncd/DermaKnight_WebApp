


import styles from "./ingredientCard.module.css"

function Product({ name, image, price, hasSale }) {
    let priceClasses;
    let formattedPrice = price;

    if(hasSale) {
        priceClasses = styles.product__priceSale;
        formattedPrice = "Free.99";
    }

    return (
        <article>
        <img className={styles.product__image} src={`/${image}.jpg`} />

        <div>
            <p className={styles.product__name}>{name}</p>
            <p className={priceClasses}>${formattedPrice}</p>
        </div>
        </article>
    );
}

export default Product;

