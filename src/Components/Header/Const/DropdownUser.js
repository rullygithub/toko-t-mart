import React, {useState} from 'react'
import classes from './Dropdown.module.css';

const DropdownUser = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
  return (
    <div className={classes.dropdownUser}>
        <h3>Selamat Datang</h3>
        <div className={classes.btnLog__user}>
            <a href='#'>Sign In</a>
        </div>
        <div className={classes.btnReg__user}>
            <a href='#'>Join for Free</a>
        </div>
    </div>
  )
}

export default DropdownUser