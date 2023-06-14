import React from "react";

export default function PawsLocation() {
  return (
    <div className="paws-location d-flex flex-column align-items-center py-5 bg-light">
      <h1>Location</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.6040468476167!2d-81.63459392337164!3d41.252182104369936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830dc4c18355617%3A0xa26a5357fe6bd84!2sPaws%20Awhile%20Pet%20Memorial%20Park!5e0!3m2!1sen!2sus!4v1686453686540!5m2!1sen!2sus"
        width="90%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
