import React from "react";

export default function contactHero() {
  return (
    <div className="contact-background">
      <div
        className="h-100 mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="contact-header--text flex-column text-white h-100 container d-flex justify-content-center align-items-center">
          <h1 className="mb-5 contact-hero-header-text">Contact Us</h1>
        </div>
      </div>
    </div>
  );
}
