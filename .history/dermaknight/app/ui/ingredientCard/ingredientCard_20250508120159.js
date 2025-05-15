

import styles from "./Product.module.css"

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

export default function Home() {
    return (
    <div>
        <header className={styles.header}>
            <h1>🎀General Store🎀</h1>
        </header>

        <main className={styles.main}>
            <section className={styles.product__list}>
                {products
                .filter((product) => product.category === "meat")
                .map((product) => {
                    const uniqueKey = makeUniqueKey();

            return (
                <Product
                key={uniqueKey}
                name={products.name}
                image={product.image}
                hasSale={product.hasSale}
                price={product.price}
                salePrice={product.salePrice}
                />
            )
            }
        )}

            </section>
        </main>

    </div>
)
}
