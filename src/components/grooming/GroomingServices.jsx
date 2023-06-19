import React from "react";
import dogPic from "../../images/dog-beach.jpg";

export default function groomingServices() {
  return (
    <div className="grooming-services-container d-flex flex-column align-items-center p-5">
      <h1 className="grooming-services--header-text">Services</h1>
      <div className="services-container  d-flex flex-row w-100 justify-content-center">
        <div className="services-container--one d-flex flex-column align-items-start grooming-para-text">
          <ul>
            <li>Shaving Pads</li>
            <li>Nail Trimming</li>
            <li>Special bathing and conditioning</li>
          </ul>
        </div>

        <div className="services-container--two d-flex flex-column grooming-para-text align-items-start ">
          <ul>
            <li>Cleaning Ears</li>
            <li>Expressing anal glands</li>
            <li>Complete all breed grooming for dogs and cats</li>
          </ul>
        </div>
      </div>
      <div className="picture-container d-flex flex-column align-items-center">
        <img src={dogPic} alt="border collie on a beach"></img>
        <p className="pt-2">
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
