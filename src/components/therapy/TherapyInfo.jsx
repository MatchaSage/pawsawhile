import React from "react";
import { Link } from "react-router-dom";

export default function TherapyInfo() {
  return (
    <div className="therapy-info-container d-flex flex-column align-items-center gap-3 pt-5 p-5">
      <h1 className="therapy-info--header-text container d-flex justify-content-center align-items-center pt-2">
        Therapy Info
      </h1>
      <div className="grooming-info--paragraph-container w-50">
        <p className="lead pb-4 grooming-para-text">
          Do you have a pet that suffers from stress, anxiety, or behavorial
          problems? If so, then therapy may be an effective option for them.
          Ashley is an experienced practitioner with a specialty in LENS
          Neurofeedback. Lens has been shown to be capable of having a myriad of
          positive effects on pets, such as...
        </p>
        <div className="therapy-list mb-5">
          <span>-Decreased seperation anxiety</span>
          <span>-Decreased marking/spraying behaviors</span>
          <span>-Decreased aggression</span>
          <span>-Decreased storm/noise anxiety</span>
          <span>-Decreased shyness/skittishness</span>
        </div>
        <p>
          If therapy is an option you'd like to explore with your pet, feel free
          to contact me using the information{" "}
          <Link to="/Contact" className="therapy-link">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
