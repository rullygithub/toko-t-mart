import React, {useState} from 'react'
import classes from './Dropdown.module.css';
import cartIcon from "../../../assets/logo/cart.png";
import arrowIcon from "../../../assets/logo/down.png"

const product = [
    {
        id: 11,
        name: 'Sayur Paprika segar hijau asli pegunungan',
        image: '../../../assets/product/1.jpg',
        price: 3500,
    },
    {
        id: 12,
        name: 'Sayur Bayam Segar asli Pegunungan',
        image: '../../../assets/product/2.jpg',
        price: 2500,
    },
    {
        id: 13,
        name: 'Sayur Bayam Segar asli Pegunungan',
        image: '../../../assets/product/2.jpg',
        price: 2500,
    }
]

const DropdownCart = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div onClick={toggleDropdown} className={classes.dropdownCart}>
        <img src={cartIcon} alt=""/><button><img src={arrowIcon} alt=""/></button>

       {isOpen && (
         <ul className={classes.productList}>
         {product.map((pro) => {
             return <li className={classes.product__li} key={pro.id}>
             <div className={classes.img_product}>
                 <img src={pro.image} alt=""/>
             </div>
             <div className={classes.name__product}>
                 <span>{pro.name}</span>
             </div>
             <div className={classes.price__product}>
                 <span>Rp. {pro.price}</span>
             </div>
         </li>
         })}
     </ul>
       )}
    </div>
  )
}

export default DropdownCart