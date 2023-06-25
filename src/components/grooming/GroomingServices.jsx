import React from "react";
import dogPic from "../../../public/images/dog-beach.jpg";

export default function groomingServices() {
  return (
    <div className="grooming-services-container d-flex flex-column align-items-center p-5">
      <h1 className="grooming-services--header-text">Services</h1>
      <div className="services-container  d-flex flex-row w-100 justify-content-center">
        <div className="services-container--one d-flex flex-column align-items-start grooming-para-text">
          <ul>
            <li>Shaving Pads</li>
            <li>Nail Trimming</li>
            <li>Special Bathing and Conditioning</li>
            <li>Cleaning Ears</li>
            <li>Expressing Anal Glands</li>
            <li>Fluff Dry</li>
            <li>Complete all breed grooming for dogs and cats</li>
          </ul>
        </div>
      </div>
      <div className="picture-container d-flex flex-column align-items-center">
        <img src={dogPic} alt="border collie on a beach"></img>
        <p className="pt-2">
          Photo by&nbsp;
          <a href="https://unsplash.com/es/@paulinel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Pauline Loroy&nbsp;
          </a>
          on&nbsp;
          <a href="https://unsplash.com/photos/U3aF7hgUSrk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
}
