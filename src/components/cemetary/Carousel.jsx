import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "../../carousel.css";
export default function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  function nextSlide() {
    if (slide === data.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  }

  function prevSlide() {
    if (slide === 0) {
      setSlide(data.length - 1);
    } else {
      setSlide(slide - 1);
    }
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={null}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}
