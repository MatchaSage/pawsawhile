import React from "react";

export default function groomingHero() {
  return (
    <div className="grooming-background">
      <div
        className="h-100 mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="grooming-header--text flex-column text-white h-100 container d-flex justify-content-center align-items-center">
          <h1 className="mb-5">CJ's Salon & Lael's Groom Room</h1>
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
