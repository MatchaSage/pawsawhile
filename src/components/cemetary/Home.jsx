import React from "react";
import Header from "../Header";
import PawsHero from "./PawsHero";
import PawsAbout from "./PawsAbout";
import PawsGrounds from "./PawsGrounds";
import K9Memorial from "./K9Memorial";
import PawsTestimonials from "./PawsTestimonials";
import PawsLocation from "./PawsLocation";
import AboutJoe from "./AboutJoe";
import PawsProposition from "./PawsProposition";
import Footer from "../Footer";

export default function Home(props) {
  return (
    <div className="home">
      <Header
        menuClicked={props.menuClicked}
        setMenuClicked={props.setMenuClicked}
      />
      <PawsHero />
      <PawsAbout />
      <PawsGrounds />
      <K9Memorial />
      <PawsTestimonials />
      <PawsLocation />
      <AboutJoe />
      <PawsProposition />
      <Footer />
    </div>
  );
}
