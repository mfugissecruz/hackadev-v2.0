import {Navbar} from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/ProductDetail/Product';

import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDetail = () => {
  
  const pathnameURL = document.location.pathname;
  const baseURL = 'https://my-simple-ecommerce-api.herokuapp.com'


  const [product, setProduct] = useState([]);
  const [colors, setColors] = useState([]);

  

  useEffect(() => {
    axios
      .get(
        `${baseURL}${pathnameURL}?size=M`
      )
      .then((response) => {
        setProduct(response.data[0]);
        console.log(response.data[0]);
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
}
