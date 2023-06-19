import React from "react";
import { Link } from "react-router-dom";

export default function PawsProposition() {
  return (
    <div className="paws-proposition d-flex justify-content-center align-items-center flex-column p-5">
      <p>
        If you would like to ensure that your friend is handled with care and
        dignity, feel free to contact us.
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
