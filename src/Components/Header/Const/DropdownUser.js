import React, {useState} from 'react'
import classes from './Dropdown.module.css';
import userIcon from "../../../assets/logo/userimg.png"
import arrowIcon from "../../../assets/logo/down.png"

const DropdownUser = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    
  return (
    <div>
        <img onClick={toggleDropdown} src={userIcon} alt=""/><button><img src={arrowIcon} alt=""/></button>
        {isOpen && (
            <div className={classes.dropdownUser}>
            <h3>Selamat Datang</h3>
            <div className={classes.textCenter}>
            <div className={classes.btnLog__user}>
                <a href='#'>Sign In</a>
            </div>
            <div className={classes.btnReg__user}>
                <a href='#'>Join for Free</a>
            </div>
            </div>
        </div>
        )}
    </div>
    
  )
}

export default DropdownUser