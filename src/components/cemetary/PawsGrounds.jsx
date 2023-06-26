import React from "react";
import Carousel from "./Carousel";
import { slides } from "../../data/carouselData.json";

export default function PawsGrounds() {
  return (
    <div className="paws-grounds">
      <div className="grounds-background p-5">
        <div className="grounds-content text-dark d-flex flex-column justify-content-start align-items-center">
          <h1 className="mb-4">Grounds</h1>
          <p className="mb-5">
            This dedicated cemetery land was professionally designed by a
            landscape architect. This land is deed restricted and we maintain a
            perpetual care fund to secure the final resting place of your
            special friend.
          </p>
          <Carousel data={slides} />
        </div>
      </div>
    </div>
  );
}
