import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import classes from './Product.module.css';
 
function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        console.log(response);
        setProducts(response.data)
      });
  }, []);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={classes.box_products}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.title}
          image={product.thumbnailUrl}
        />
      ))}
    </div>
  );
}

export default ProductList;
