import styles from "./Product.module.css";
import { FaHeart } from "react-icons/fa";



export default function Product({ productInfo }) {
  const product = productInfo;
  const pathnameURL = document.location.pathname;

  // console.log(pathnameURL);
  return (
    <>
      <div className={styles.product}>
        <a href={`/products/${product.slug}/s?color=${product.color}`} >
          <FaHeart className={styles.svg} />
          <img src={product.image} alt={product.product}/>
          <p>{product.product}</p>
          <p className={styles.preco}>{product.price}</p>
        </a>
      </div>
    </>
  );
}