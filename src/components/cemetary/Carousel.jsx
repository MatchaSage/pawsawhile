import React, { useState } from "react";
import grounds1 from "../../images/grounds1.jpg";
import grounds2 from "../../images/grounds2.jpg";
import grounds3 from "../../images/grounds3.jpg";
import grounds4 from "../../images/grounds4.jpg";
import grounds5 from "../../images/grounds5.jpg";

export default function Carousel() {
  const [length, setLength] = useState(0);
  const groundsArray = [grounds1, grounds2, grounds3, grounds4, grounds5];

  function incrementLength() {
    if (length < 4) {
      setLength(length + 1);
    }
  }

  function decrementLength() {
    if (length > 0) {
      setLength(length - 1);
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
