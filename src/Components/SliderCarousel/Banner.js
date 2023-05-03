import React from 'react'
import classes from './Carousel.module.css';
import actIcon from '../../assets/logo/actualizar.png'
import boxIcon from '../../assets/logo/package.png'
import wrsIcon from '../../assets/logo/warehouse.png';

const Banner = () => {
  return (
    <div className={classes.banner}>
        <div className={classes.topBanner}>
            <img src={actIcon} alt="" style={{width: '40px', height: '40px'}}/>
            <h3>Permintaan Penawaran</h3>
        </div>
        <div className={classes.topBanner}>
            <img src={boxIcon} alt="" style={{width: '40px', height: '40px'}}/>
            <h3>Siap Dikirim</h3>
        </div>
        <div className={classes.topBanner}>
            <img src={wrsIcon} alt="" style={{width: '40px', height: '40px'}}/>
            <h3>Stok Tersedia</h3>
        </div>
    </div>
  )
}

export default Banner