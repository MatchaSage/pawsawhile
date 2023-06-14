import React from "react";
import PawsContact from "./PawsContact";
import GroomingContact from "./GroomingContact";
import Header from "../Header";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="contact-container">
      <Header />
      <PawsContact />
      <GroomingContact />
      <Footer />
    </div>
  );
}
