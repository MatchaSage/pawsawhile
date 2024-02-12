import React, { useEffect } from "react";
import GroomingInfo from "./GroomingInfo";
import GroomingHero from "./GroomingHero";
import GroomingServices from "./GroomingServices";
import GroomingProp from "./GroomingProposition";
import PawsLocation from "../cemetary/PawsLocation";
import Header from "../Header";
import Footer from "../Footer";

export default function Grooming(props) {
  return (
    <div className="grooming-header">
      <Header
        menuClicked={props.menuClicked}
        setMenuClicked={props.setMenuClicked}
      />
      <GroomingHero />
      <GroomingInfo />
      <GroomingServices />
      <PawsLocation />
      <GroomingProp />
      <Footer />
    </div>
  );
}
