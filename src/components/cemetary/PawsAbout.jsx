import React from "react";
import CemetaryEntrance from "../../images/cemetaryEntrance.jpg";
export default function PawsAbout() {
  return (
    <div className="paws-about">
      <div className="paws-about-header d-flex justify-content-center">
        <h1>Pet Memorial Park</h1>
      </div>
      <div className="paws-about-content d-flex flex-row justify-content-center">
        <p className="w-50">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          optio error ipsum, rerum amet eum corrupti in suscipit, debitis
          voluptatibus cupiditate dolor neque sapiente laudantium! Nihil
          obcaecati animi quibusdam labore.
        </p>
        <img
          className="img-fluid"
          style={{ height: "200px" }}
          src={CemetaryEntrance}
          alt="About Photo"
        />
      </div>
    </div>
  );
}
