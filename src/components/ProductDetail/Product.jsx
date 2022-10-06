import styles from "./Product.module.css";
import "./Colors.css";

function Product({
  product,
  price,
  category,
  colors,
  description,
  image,
  slug,
  addItemCart
}) {

  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={image} alt={product} />
      </div>
      <div className={styles.info_products}>
        <h5>{category}</h5>
        <h2>{product}</h2>
        <p className={styles.price}>R{price}</p>
        <p className={styles.description}>{description}</p>
        <section>
          <h3>Sizes</h3>
          <div className={styles.sizes}>
            <label htmlFor="size">P</label>
            <input value="P" id="P" name="size" type="radio" />
            <label htmlFor="size">M</label>
            <input value="M" id="M" name="size" type="radio" />
            <label htmlFor="size">G</label>
            <input value="G" id="G" name="size" type="radio" />
          </div>
          <h3>Colors</h3>
          {colors.map((color) => (
            <a
              href={`https://my-simple-ecommerce-api.herokuapp.com/products/${slug}/s?size=M`}
              key={colors}
            >
              <button className={`${color}`}>&nbsp;</button>
            </a>
          ))}
          <button
            className={styles.addcart}
            type="submit"
            onClick={() => addItemCart(productInfo)}
          >Adicionar ao carrinho</button>
        </section>
      </div>
    </div>
  );
}

export default Product;