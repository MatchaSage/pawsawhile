import React from "react";

export default function groomingInfo() {
  return (
    <div className="grooming-info-container d-flex flex-column align-items-center gap-3 pt-5 p-5">
      <h1 className="grooming-info--header-text container d-flex justify-content-center align-items-center pt-2">
        Grooming Info
      </h1>
      <div className="grooming-info--paragraph-container w-50">
        <p className="lead pb-4 grooming-para-text">
          We are pleased to let you know that Paws Awhile is still partnered
          with CJ's Salon! Cynthia still works on the premises offering stellar
          customer focused care. As the business has grown, CJ's has offered
          quality care to steady and loyal clients for over 20 years. Here your
          pet is encouraged to play and interact with others in a safe,
          controlled environment as they wait. We are also equipped with a wide
          range of specialized shampoos, which you can request at an additional
          cost. Check out our services below.
        </p>
      </div>
    </div>
  );
}
