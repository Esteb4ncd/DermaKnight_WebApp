import Image from "next/image";
import styles from "./page.module.css";

// my imports:
import styles from "./ingredientCard.module.css";
import Product from "@/_ui/ingredientCard/ingredientCard.js";


export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1>🎀General Store🎀</h1>
      </header>

      <main>
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
