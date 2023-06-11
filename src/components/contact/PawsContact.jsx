import React from "react";

export default function pawsContact() {
  return (
    <div className="paws-contact-container d-flex flex-column align-items-center">
      <h1>Paws Awhile</h1>
      <span>Hours: By Appointment</span>
      <div
        className="paws-contact--form h-75 w-75 mask px-5 py-5"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <form className="d-flex flex-column">
          <label htmlFor="name" className="mt-3">
            Name:{" "}
          </label>
          <input type="text" id="name" name="name" className="w-25"></input>
          <label htmlFor="phoneNumber" className="mt-3">
            Number:{" "}
          </label>
          <input type="tel" id="number" name="number" className="w-25"></input>
          <label htmlFor="email" className="mt-3">
            Email:{" "}
          </label>
          <input type="email" id="email" name="email" className="w-25"></input>
          <label htmlFor="message" className="mt-3">
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
            value={"submit"}
            className="mt-5 btn btn-primary submit-button"
          ></input>
        </form>
      </div>
    </div>
  );
}
