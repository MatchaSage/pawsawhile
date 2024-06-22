import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import KennelHero from "./KennelHero";
import KennelInfo from "./KennelInfo";

export default function Kennel(props) {
  return (
    <div className="kennel-header">
      <Header
        menuClicked={props.menuClicked}
        setMenuClicked={props.setMenuClicked}
      />
      <KennelHero />
      <KennelInfo />
      <Footer />
    </div>
  );
}
