import React from "react";
import PawsContact from "./PawsContact";
import GroomingContact from "./GroomingContact";
import Header from "../Header";
import Footer from "../Footer";
import ContactHero from "./ContactHero";

export default function Contact() {
  return (
    <div className="contact-container">
      <Header />
      <ContactHero />
      <div className="d-flex flex-column align-items-center ">
        <PawsContact />
        <GroomingContact />
      </div>
      <Footer />
    </div>
  );
}
