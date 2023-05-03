import React from 'react'
import classes from './Category.module.css';


const Category = ({props}) => {
    
  return (
    <div className={classes.category_box} >Category
        <div className={classes.swipe_item}>
            <img src={this.props.image} alt={this.props.title}/>
            <h3>{this.props.title}</h3>
        </div>
    </div>
  )
}

export default Category