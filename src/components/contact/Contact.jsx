import React from "react";
import PawsContact from "./PawsContact";
import TherapyContact from "./TherapyContact";
import GroomingContact from "./GroomingContact";

import Header from "../Header";
import Footer from "../Footer";
import ContactHero from "./ContactHero";
import KennelContact from "./KennelContact";

export default function Contact(props) {
  return (
    <div className="contact-container">
      <Header
        menuClicked={props.menuClicked}
        setMenuClicked={props.setMenuClicked}
      />
      <ContactHero />
      <div className="d-flex flex-column align-items-center ">
        <PawsContact />
        <KennelContact />
        <TherapyContact />
        <GroomingContact />
      </div>
      <Footer />
    </div>
  );
}
