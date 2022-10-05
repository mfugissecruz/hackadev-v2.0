import styles from "./Product.module.css";
import { FaHeart } from "react-icons/fa";

export default function Product(props) {
  return (
    <>
      <div className={styles.product}>
        <a href={`products/${props.slug}/p?color='${props.color}'`} >
          <FaHeart className={styles.svg} />
          <img src={props.image} alt={props.product}/>
          <p>{props.product}</p>
          <p className={styles.preco}>{props.price}</p>
        </a>
      </div>
    </>
  );
}