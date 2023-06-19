import React from "react";
import { Link } from "react-router-dom";

export default function groomingProposition() {
  return (
    <div className="proposition-container d-flex flex-column align-items-center pt-5 pb-5 p-5">
      <p className="business-proposition-text w-75 pb-3 grooming-para-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, magnam
        consectetur doloremque quidem alias sit nemo laborum. Nobis reiciendis
        maiores esse excepturi molestias voluptate omnis velit fuga enim ratione
        sint labore, quae soluta nostrum deleniti nihil a assumenda? Veniam,
        repudiandae.
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
