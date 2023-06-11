import React, { useEffect } from "react";
// import groomingIMG from "../../images/cemetaryEntrance.jpg";
import GroomingInfo from "./GroomingInfo";
import GroomingServices from "./GroomingServices";
import GroomingProp from "./GroomingProposition";

export default function Grooming() {
  return (
    <div className="grooming-header">
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
      <GroomingInfo />
      <GroomingServices />
      <GroomingProp />
    </div>
  );
}
