import React from 'react'
import classes from './Product.module.css'

const Product = (props) => {
  return (
    <div className={classes.product_card}>
        <div className={classes.product__img}>
            <img src={props.image} alt=""/>
        </div>
        <h2>{props.name}</h2>
        
        
        
    </div>
  )
}

export default Product