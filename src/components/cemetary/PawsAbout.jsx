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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi odio
          beatae labore id! Dolorum maiores dolorem nisi, doloremque laudantium
          inventore eum voluptatibus illum provident, assumenda laboriosam neque
          cupiditate nesciunt voluptates iusto consequatur quasi ducimus nam
          error totam exercitationem ipsum libero. Corrupti voluptatibus dolorem
          assumenda unde iure quis tenetur itaque? Neque eligendi hic esse, sit
          nam commodi doloribus eveniet reprehenderit, ut alias perferendis quae
          eaque rerum explicabo vel nisi recusandae? Quisquam, voluptatibus quam
          recusandae delectus ab quo accusantium, eum autem amet nihil natus
          nemo? Sit ad doloribus asperiores harum debitis laboriosam repellendus
          saepe dicta delectus et! Alias itaque corrupti a iste?
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
