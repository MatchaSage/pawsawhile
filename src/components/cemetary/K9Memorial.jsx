import React from "react";

export default function K9Memorial() {
  return (
    <div className="k9-memorial d-flex flex-column align-items-center py-5 bg-light">
      <h1 className="mb-4">K9 Memorial</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/peqWqkcGAmM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
