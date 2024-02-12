import React from "react";
import { Link } from "react-router-dom";

export default function TherapyHero() {
  return (
    <div className="therapy-hero">
      <div className="therapy-hero-background">
        <div
          className="h-100 mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className="hero-text flex-column text-white h-100 d-flex justify-content-center align-items-center">
            <h1 className="mb-1">Wellminded Therapeutics</h1>
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
