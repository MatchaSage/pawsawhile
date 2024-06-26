import React from "react";
import { Link } from "react-router-dom";

export default function KennelHero() {
  return (
    <div className="kennel-background">
      <div
        className="h-100 mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="grooming-header--text flex-column text-white h-100 container d-flex justify-content-center align-items-center">
          <h1 className="mb-5">CJ's Pet Salon</h1>
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
  );
}
