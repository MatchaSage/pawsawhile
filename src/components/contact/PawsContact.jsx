import React from "react";

export default function pawsContact() {
  return (
    <div className="paws-contact-container">
      <div className="paws-contact--form">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name"></input>
          <label htmlFor="phoneNumber">Number: </label>
          <input type="tel" id="number" name="number"></input>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email"></input>
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" rows={5} cols={50}></textarea>
        </form>
      </div>
    </div>
  );
}
