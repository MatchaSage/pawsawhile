import React from "react";

export default function pawsContact() {
  return (
    <div className="paws-contact-container d-flex flex-row align-items-center justify-content-between p-5">
      <form className="d-flex flex-column">
        <label htmlFor="name" className="pt-2">
          Name:{" "}
        </label>
        <input type="text" id="name" name="name" className=""></input>
        <label htmlFor="phoneNumber" className="pt-2">
          Number:{" "}
        </label>
        <input type="tel" id="number" name="number" className=""></input>
        <label htmlFor="email" className="pt-2">
          Email:{" "}
        </label>
        <input type="email" id="email" name="email" className=""></input>
        <label htmlFor="message" className="pt-2">
          Message:{" "}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          cols={50}
          className="w-50"
        ></textarea>
        <input
          type="submit"
          value={"Submit"}
          className="mt-5 btn btn-primary submit-button"
        ></input>
      </form>
      <div>
        <h1>Paws Awhile</h1>
        <span>Hours: By Appointment</span>
      </div>
    </div>
  );
}
