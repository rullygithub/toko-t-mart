import React from "react";
// import { BrowserRouter as Router, } from 'react-router-dom'
import classes from "./Styles/Header.module.css";
import Logo from "../../assets/logo/logo.png";
import userIcon from "../../assets/logo/userimg.png"
import arrowIcon from "../../assets/logo/down.png"
import cartIcon from "../../assets/logo/cart.png";
// import {FaAngleDown} from 'react-icons/fa'
// import {BsFillCaretDownFill} from 'react-icons/bs'

import Dropdown from "./Const/Dropdown";
import DropdownUser from "./Const/DropdownUser";
const Navbar = () => {

   

  return (
    <div className={classes.navbar}>
      <div className={classes.leftNav}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div>
            <Dropdown/>
        </div>
      </div>
      <div className={classes.rightNav}>
        <div className={classes.userIcon}>
        <img src={userIcon} alt=""/><button><img src={arrowIcon} alt=""/></button>
        <DropdownUser/>
        </div>
        <div className={classes.cartIcon}>
        <img src={cartIcon} alt=""/><button><img src={arrowIcon} alt=""/></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
