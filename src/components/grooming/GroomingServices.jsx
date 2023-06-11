import React from "react";
import dogPic from "../../images/dog-beach.jpg";

export default function groomingServices() {
  return (
    <div className="grooming-services-container d-flex flex-column align-items-center">
      <h1 className="grooming-services--header-text">Services</h1>
      <div className="services-container  d-flex flex-row">
        <div className="services-container--one d-flex flex-column">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="services-container--two d-flex flex-column">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="picture-container d-flex flex-column align-items-center">
        <img src={dogPic} alt="border collie on a beach"></img>
        <p>
          Photo by{" "}
          <a href="https://unsplash.com/es/@paulinel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Pauline Loroy
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/U3aF7hgUSrk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}
