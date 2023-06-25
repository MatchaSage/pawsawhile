import React from "react";
import Logo from "../../../public/images/paws_logo.png";

export default function pawsContact() {
  return (
    <div className="paws-contact-container d-flex flex-column align-items-center justify-content-between p-5 mt-5">
      <img className="contact-logo" src={Logo} alt="Logo" />
      <div className="d-flex flex-md-row flex-column form-content">
        <form
          className="d-flex flex-column"
          name="contact"
          action="/contact"
          method="post"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className="pt-2">
            Name
          </label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="number" className="pt-2">
            Number
          </label>
          <input type="tel" id="number" name="number" required />
          <label htmlFor="email" className="pt-2">
            Email
          </label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message" className="pt-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            cols={50}
            className="w-100"
          ></textarea>
          <input
            type="submit"
            value={"Submit"}
            className="mt-5 btn btn-primary submit-button"
          ></input>
        </form>
        <div className="d-flex flex-column paws-contact-text">
          <span>
            <b>Hours:</b> By Appointment
          </span>
          <span>
            <b>Phone:</b> 330-659-4270
          </span>
        </div>
      </div>
    </div>
  );
}
