import React from "react";
import Joe from "../../images/joe.jpg";

export default function AboutJoe() {
  return (
    <div className="about-joe d-flex flex-column align-items-center p-5">
      <h1 className="mb-4">About Joe</h1>
      <div className="about-joe-content d-flex flex-md-row flex-column justify-content-center">
        <img src={Joe} alt="Joe Picture" />
        <p>
          In the late 80's, Joe had a dream of opening a pet cemetery to help
          ease people through the process of saying goodbye to their loving
          pets. Shortly after that Joe began construction of the grounds,
          building out the driveways and planting the grass to create the Paws
          Awhile grounds. In 1991, Joe had his grand opening, and ever since
          then has been helping give pets who have passed the respect and
          dignity they deserve. Whenever he isn't working, Joe is a family man
          who loves spending time with his daughters.
        </p>
      </div>
    </div>
  );
}
