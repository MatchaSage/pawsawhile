import React from "react";
import { Link } from "react-router-dom";

export default function PawsProposition() {
  return (
    <div className="paws-proposition d-flex justify-content-center align-items-center flex-column p-5">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        similique in odit expedita sit ad nihil, exercitationem eos quo
        temporibus minima, iusto tempora, unde assumenda! Obcaecati voluptates
        laudantium neque dolor.
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
