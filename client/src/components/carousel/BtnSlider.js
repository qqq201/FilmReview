import React from "react";
import "./Slider.css";
import leftArrow from "./icons/OIP2.svg";
import rightArrow from "./icons/OIP1.svg";
//import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

export default function BtnSlider({ direction, moveSlide }) {
<<<<<<< HEAD
=======
    
>>>>>>> 18066d9e3d549a99010dbf43de42534301283e47
  return (
    <span
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt='button'/>
    </span>
  );
}
