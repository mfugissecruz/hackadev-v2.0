import styles from "./Product.module.css";
import "./Colors.css";

<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/ducks/cart/cartSlice';

function Product({ product }) {

  const dispatch = useDispatch()

=======
function Product({
  product,
  price,
  category,
  colors,
  description,
  image,
  slug,
  addItemCart,
}) {
>>>>>>> refs/remotes/origin/development
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={product.image} alt={product.product} />
      </div>
      <div className={styles.info_products}>
        <h5>{product.category}</h5>
        <h2>{product.product}</h2>
        <p className={styles.price}>R{product.price}</p>
        <p className={styles.description}>{product.description}</p>
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
<<<<<<< HEAD
          {/* {product.colors.map((color) => (
            <a
              href={`https://my-simple-ecommerce-api.herokuapp.com/products/${slug}/s?size=M`}
              key={product.colors}
            >
              <button className={`${product.color}`}>&nbsp;</button>
=======
          {colors.map((color) => (
            <a href={`/products/${slug}/?color=${color}`} key={color}>
              <button className={`${color}`}>&nbsp;</button>
>>>>>>> refs/remotes/origin/development
            </a>
          ))} */}
          <button
            className={styles.addcart}
<<<<<<< HEAD
            onClick={() => dispatch(addToCart({ 
              id: product.id, 
              title: product.product, 
              image: product.image, 
              price: product.price
            }))}
          >Adicionar ao carrinho</button>
=======
            type="submit"
            onClick={() => addItemCart(productInfo)}
          >
            Adicionar ao carrinho
          </button>
>>>>>>> refs/remotes/origin/development
        </section>
      </div>
    </div>
  );
}

export default Product;

<<<<<<< HEAD
=======
// https://my-simple-ecommerce-api.herokuapp.com/products/${slug}/p?color=${color}
>>>>>>> refs/remotes/origin/development
