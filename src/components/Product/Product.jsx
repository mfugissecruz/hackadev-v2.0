import styles from "./Product.module.css";
import { FaHeart, FaCartPlus } from "react-icons/fa";

export default function Product({ productInfo }) {
  const product = productInfo;

  return (
    <>
      <div className={styles.product}>
        <button className={styles.addCart}>
          <FaCartPlus />
        </button>
        <a href={`products/${product.slug}/?color=${product.color}`}>
          <img src={product.image} alt={product.product} />
          <p>{product.product}</p>
          <p className={styles.preco}>{product.price}</p>
        </a>
      </div>
    </>
  );
}
