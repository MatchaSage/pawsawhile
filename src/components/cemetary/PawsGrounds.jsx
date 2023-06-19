import React from "react";
import Carousel from "./Carousel";

export default function PawsGrounds() {
  return (
    <div className="paws-grounds">
      <div className="grounds-background p-5">
        <div className="grounds-content text-dark d-flex flex-column justify-content-start align-items-center">
          <h1 className="mb-4">Grounds</h1>
          <p className="mb-5">
            This dedicated cemetary land was professionally designed by a
            landscape architect. The is land is deed restricted and we maintain
            a perpetual care fund to secure the final resting place of your
            special friend.
          </p>
          <Carousel />
        </div>
      </div>
    </div>
  );
}
