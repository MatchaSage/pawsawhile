import React from "react";
import Header from "../Header";
import TherapyHero from "./TherapyHero";
import TherapyInfo from "./TherapyInfo";
import Footer from "../Footer";
export default function Therapy(props) {
  return (
    <div className="therapy">
      <Header
        menuClicked={props.menuClicked}
        setMenuClicked={props.setMenuClicked}
      />
      <TherapyHero />
      <TherapyInfo />
      <Footer />
    </div>
  );
}
