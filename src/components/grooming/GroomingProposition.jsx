import React from "react";
import { Link } from "react-router-dom";
export default function groomingProposition() {
  return (
    <div className="proposition-container d-flex flex-column align-items-center pt-5 pb-5 p-5">
      <p className="business-proposition-text w-75 pb-3 grooming-para-text">
        If you are interested in getting grooming care from proven professionals
        with 20 plus years of experience, be sure to give us a call!
      </p>
      <Link
        className="btn btn-outline-light btn-lg"
        to="/Contact"
        role="button"
      >
        Get in Touch
      </Link>
    </div>
  );
}
