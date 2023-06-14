import React from "react";
import grounds1 from "../../images/grounds1.jpg";
export default function PawsGrounds() {
  return (
    <div className="paws-grounds">
      <div className="grounds-background p-5">
        <div className="grounds-content text-dark d-flex flex-column justify-content-start align-items-center">
          <h1 className=" ">Grounds</h1>
          <p className="mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            corrupti in. Sint velit earum, quia sequi commodi placeat veritatis
            ducimus quam ipsam consequuntur hic magnam modi obcaecati maxime
            ipsum amet!
          </p>
          <img src={grounds1} alt="" />
        </div>
      </div>
    </div>
  );
}
