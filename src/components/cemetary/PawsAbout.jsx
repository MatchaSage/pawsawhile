import React from "react";
import CemetaryEntrance from "../../images/cemetaryEntrance.jpg";
export default function PawsAbout() {
  return (
    <div className="paws-about">
      <div className="paws-about-header">
        <h1>Pet Memorial Park</h1>
      </div>
      <div className="paws-about-content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          optio error ipsum, rerum amet eum corrupti in suscipit, debitis
          voluptatibus cupiditate dolor neque sapiente laudantium! Nihil
          obcaecati animi quibusdam labore.
        </p>
      </div>
      <img
        className="img-fluid"
        style={{ height: "200px" }}
        src={CemetaryEntrance}
        alt="About Photo"
      />
    </div>
  );
}
