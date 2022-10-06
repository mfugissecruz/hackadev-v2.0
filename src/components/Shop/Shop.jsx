import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProdutsByPilot } from "../../store/fetchActions";

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
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
