import { useEffect } from "react";
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux'
import { getProdutsByPilot } from '../../redux/fetchActions'
=======
import { useSelector, useDispatch } from "react-redux";
import { getProdutsByPilot } from "../../store/fetchActions";
>>>>>>> refs/remotes/origin/development

import Product from "../Product/Product";
import styles from "./Shop.module.css";

function Shop() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdutsByPilot());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.shop}>
<<<<<<< HEAD

        {
          products?.map((product) => (
            <Product
              key={product.id}
              productInfo={product}
=======
        {products.length > 0 &&
          products.map((product) => (
            <Product
              key={product.id}
              product={product.product}
              price={product.price}
              image={product.image}
              slug={product.slug}
              color={product.color}
              pilot={product.pilot}
>>>>>>> refs/remotes/origin/development
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
