import React from "react";
import { Link } from "react-router-dom";
import cemetaryEntrance from "../../images/cemetaryEntrance.jpg";
import angelImg from "../../images/angel.jpg";

export default function PawsHero() {
  return (
    <div className="paws-hero">
      <div className="hero-background">
        <div
          className="h-100 mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <div className="hero-text flex-column text-white h-100 d-flex justify-content-center align-items-center">
            <h1 className="mb-1">Paws Awhile</h1>
            <h2 className="mb-5">Pet Memorial Park</h2>
            <Link
              className="btn btn-outline-light btn-lg"
              to="/Contact"
              role="button"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
