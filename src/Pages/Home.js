import React from "react";
import classes from "./Styles/Main.module.css";
import ProductList from "../Components/Product/ProductList";

const Home = () => {
  return (
    <div className={classes.home__page_div}>
      <h2>Product List</h2>
      <div>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
