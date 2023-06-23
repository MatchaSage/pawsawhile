import React, { useState, useEffect } from "react";
import grounds1 from "../../images/grounds1.jpg";
import grounds2 from "../../images/grounds2.jpg";
import grounds3 from "../../images/grounds3.jpg";
import grounds4 from "../../images/grounds4.jpg";

export default function Carousel() {
  const [length, setLength] = useState(0);
  const groundsArray = [grounds1, grounds2, grounds3, grounds4];
  //Loads all carousel images early for a more responsive experience.
  groundsArray.forEach((picture) => {
    const img = new Image();
    img.src = picture.jpg;
  });

  function incrementLength() {
    if (length < 3) {
      setLength(length + 1);
    } else {
      setLength(0);
    }
  }

  function decrementLength() {
    if (length > 0) {
      setLength(length - 1);
    } else {
      setLength(3);
    }
  }
  return (
    <div className="carousel d-flex flex-column justify-content-center align-items-center">
      <img src={groundsArray[length]} alt="Grounds Image" className="mb-5" />
      <div className="icon-container">
        <i className="arrow left-arrow" onClick={decrementLength}></i>
        <i className="arrow right-arrow" onClick={incrementLength}></i>
      </div>
    </div>
  );
}
