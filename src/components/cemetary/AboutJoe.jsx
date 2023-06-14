import React from "react";
import Bear from "../../images/bear";

export default function AboutJoe() {
  return (
    <div className="about-joe d-flex flex-column align-items-center">
      <h1>About</h1>
      <div className="about-joe-content d-flex justify-content-between">
        <img
          src={Bear}
          alt="Joe Picture"
          style={{ height: "200px", maxWidth: "50%" }}
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          officiis cum eos magni iste quam excepturi vel? Enim consectetur in,
          quia eaque deleniti, similique delectus non sequi, officiis ratione
          quod.
        </p>
      </div>
    </div>
  );
}
