import React from "react";

export default function KennelInfo() {
  return (
    <div className="grooming-info-container d-flex flex-column align-items-center gap-3 pt-5 p-5">
      <h1 className="grooming-info--header-text container d-flex justify-content-center align-items-center pt-2">
        Kennel Info
      </h1>
      <div className="grooming-info--paragraph-container w-50">
        <p className="lead pb-4 ">
          Nestled on over 20 acres in Richfield Ohio, you'll find the perfect
          vacation in a country setting for your pet. We provide a safe,
          comfortable and fun atmosphere to play, stay, eat, sleep and repeat.
        </p>
        <p>
          The facility has a large outdoor play area for the dogs to run and
          play in a supervised environmentand also accommodates dogs that would
          rather not be out with other dogs in 2 additional, separate outdoor
          areas. The dogs are free to roam all day and still have access inside.
          We also provide much needed rest breaks in between playtimes.
          All-inclusive care at $45 per day. Please call for more information.
        </p>
        <h1 className="grooming-info--header-text container d-flex justify-content-center align-items-center pt-2">
          Contact
        </h1>
        <p className="lead container d-flex justify-content-center align-items-center pt-2">
          <b>Call or Text: &nbsp;</b>216-370-2939
        </p>
        <p className="lead container d-flex justify-content-center align-items-center pt-2">
          <b>Email: &nbsp;</b>welovedogs24@yahoo.com
        </p>
      </div>
    </div>
  );
}
