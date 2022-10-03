import styles from "./Product.module.css";
import { FaHeart } from "react-icons/fa";

function Product(props) {
  return (
    <>
      <div className={styles.product}>
        <a href="/product">
          <FaHeart className={styles.svg} />
          <img src={props.image} alt={props.product}/>
          <p>{props.product}</p>
          <p className={styles.preco}>{props.price}</p>
        </a>
      </div>
    </>
  );
}

export default Product;
