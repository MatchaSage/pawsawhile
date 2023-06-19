import React from "react";
import CemetaryEntrance from "../../images/cemetaryEntrance.jpg";
export default function PawsAbout() {
  return (
    <div className="paws-about p-5 bg-light">
      <div className="paws-about-header d-flex justify-content-center ">
        <h1 className="mb-4">Pet Memorial Park</h1>
      </div>
      <div className="paws-about-content d-flex flex-column justify-content-center align-items-center align-items-md-start flex-md-row">
        <p className="paws-about-text">
          Paws Awhile has been providing proffesional afterlife options to pet
          owners for the past 33 years. We are a family owned business
          conveniently located on a 23 acre wooded park-like setting adjacent to
          the Cuyahoga Valley National Park in Richfield, and roughly 16 miles
          from Cleveland or Akron. Our family and staff have come to appreciate
          knowing many of our customers pets throughout their entire lives thus
          encouraging us to provide the highest quality service in both life and
          death. We look forward to providing the custom quality care that you,
          your family, and most importantly, your pet deserves. We understand
          that every situation is different, that's why Paws Awhile offers a
          wide range of services to fit any budget, from the most elegant and
          elaborate to the simplest with dignity.
        </p>
        <img
          className="img-fluid justify-content-center"
          src={CemetaryEntrance}
          alt="About Photo"
          style={{ maxWidth: "50%", height: "auto" }}
        />
      </div>
    </div>
  );
}
