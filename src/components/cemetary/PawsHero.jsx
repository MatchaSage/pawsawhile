import React from "react";
import cemetaryEntrance from "../../images/cemetaryEntrance.jpg";
import angelImg from "../../images/angel.jpg";

export default function PawsHero() {
  return (
    <div className="paws-hero">
      <div className="hero-background">
        <div
          className="h-100 mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className="hero-text flex-column text-white h-100 container d-flex justify-content-center align-items-center">
            <h1 className="mb-1">Paws Awhile</h1>
            <h2 className="mb-5">Pet Cemetary</h2>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
