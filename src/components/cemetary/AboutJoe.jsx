import React from "react";
import Joe from "../../images/joe.jpg";

export default function AboutJoe() {
  return (
    <div className="about-joe d-flex flex-column align-items-center p-5">
      <h1 className="mb-4">About Joe</h1>
      <div className="about-joe-content d-flex flex-md-row flex-column justify-content-center">
        <img src={Joe} alt="Joe Picture" />
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
