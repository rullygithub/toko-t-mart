import React, { useEffect, useState } from "react";
import classes from "./Carousel.module.css";
import carousel1 from "../../assets/slider/slider-1.jpg";
import carousel2 from "../../assets/slider/slider-2.jpg";
import carousel3 from "../../assets/slider/slider-3.jpg";
import carousel4 from "../../assets/slider/slider-4.jpg";
import carousel5 from "../../assets/slider/slider-5.png";
import LeftIcon from "../../assets/logo/left.png";
import RightIcon from "../../assets/logo/right.png";
import Banner from "./Banner";

const Carousel = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [prevSlide, setPrevSlide] = useState(images.length - 1 );

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrentSlide(
        currentSlide === images.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);
    return () => clearInterval(autoplay);
  }, [currentSlide,images.length]);

  const goToPrevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide(
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  };

  const Indicator = ({ active }) => (
    <span
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: '2px solid',
        borderColor: active ? "red" : "gray",
        display: "inline-block",
        margin: "0 5px",
        
      }}
    ></span>
  );

  return (
    <div className={classes.carousel_box}>
      <div className={classes.text__info_banner}>
        <Banner/>
      </div>
      <div className={classes.carousel}>
        <button className={classes.prev} onClick={goToPrevSlide}>
          <img src={LeftIcon} alt="" />
        </button>
        <button className={classes.next} onClick={goToNextSlide}>
          <img src={RightIcon} alt="" />
        </button>


        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{ display: currentSlide === index ? "block" : "none" }}
          />
        ))}

        <div style={{textAlign: 'center'}}>
          {images.map((img, index) => (
            <Indicator key={index} active={currentSlide === index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
