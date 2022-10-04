import { useState, useEffect } from "react";
import Product from "../Product/Product";
import styles from "./Shop.module.css";
import axios from "axios";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-simple-ecommerce-api.herokuapp.com/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;