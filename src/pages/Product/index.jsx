import { Navbar } from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/ProductDetail/Product";

import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDetail = () => {
  const urlParam = new URLSearchParams(window.location.search);
  const pathnameURL = document.location.pathname;
<<<<<<< HEAD
  const baseURL = 'https://my-simple-ecommerce-api.herokuapp.com'

=======
  const colorName = urlParam.get("color");
>>>>>>> refs/remotes/origin/development

  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState([]);

  

  useEffect(() => {
    axios
      .get(
<<<<<<< HEAD
        `${baseURL}${pathnameURL}?size=M`
=======
        `https://my-simple-ecommerce-api.herokuapp.com${pathnameURL}p?color=${colorName}`
>>>>>>> refs/remotes/origin/development
      )
      .then((response) => {
        setProduct(response.data[0]);
      })
      .catch((err) => console.log(err));

    axios
      .get(
        `https://my-simple-ecommerce-api.herokuapp.com${pathnameURL}s?size=P`
      )
      .then((response) => {
        setColors(response.data.map((prod) => prod.color));
        console.log(colors);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
        <Product
          product={product}
          // price={product.price}
          // category={product.category}
          // colors={colors}
          // slug={product.slug}
          // description={product.description}
          // image={product.image}
        />
      <Footer />
    </>
  );
};
