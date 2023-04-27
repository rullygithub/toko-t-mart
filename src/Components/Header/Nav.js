import React from 'react';
import classes from './Styles/Header.module.css';

const Nav = () => {

    const currentDate = new Date();
    const today = currentDate.toLocaleString('en-US', {weekday: 'long'});
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", {month: "long"});
    const year = currentDate.getFullYear();

  return (
    <div className={classes.nav}>
        <span>Welcome to T-Mart</span>
        <div className={classes.datenow}>
            <span>Sekarang : {`${today}`}, {`${day} ${month} ${year}`}</span> 
            
        </div>
    </div>
  )
}

export default Nav