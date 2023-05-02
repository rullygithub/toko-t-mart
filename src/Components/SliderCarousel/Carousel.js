import React, { useEffect, useState } from "react";
import classes from "./Carousel.module.css";
import carousel1 from "../../assets/slider/slider-1.jpg";
import carousel2 from "../../assets/slider/slider-2.jpg";
import carousel3 from "../../assets/slider/slider-3.jpg";
import carousel4 from "../../assets/slider/slider-4.jpg";
import carousel5 from "../../assets/slider/slider-5.png";
import LeftIcon from '../../assets/logo/left.png'
import RightIcon from '../../assets/logo/right.png'

const Carousel = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const [currsentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentSlide(
        currsentSlide === images.length - 1 ? 0 : currsentSlide + 1
      );
    }, 5000);
    return () => clearInterval(autoplay);
  }, [currsentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide(
      currsentSlide === 0 ? images.length - 1 : currsentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currsentSlide === images.length - 1 ? 0 : currsentSlide + 1
    );
  };

  return (
    <div className={classes.carousel_box}>
      <div className={classes.text__info_banner}>
        <h2>Hallo</h2>
      </div>
      <div className={classes.carousel}>
        <button className={classes.prev} onClick={goToPrevSlide}><img src={LeftIcon} alt=""/></button>
        <button className={classes.next} onClick={goToNextSlide}><img src={RightIcon} alt=""/></button>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{ display: currsentSlide === index ? "block" : "none" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
