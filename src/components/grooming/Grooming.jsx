import React, { useEffect } from "react";
import GroomingInfo from "./GroomingInfo";
import GroomingHero from "./GroomingHero";
import GroomingServices from "./GroomingServices";
import GroomingProp from "./GroomingProposition";
import PawsLocation from "../cemetary/PawsLocation";
import Header from "../Header";
import Footer from "../Footer";

export default function Grooming() {
  return (
    <div className="grooming-header">
      <Header />
      <GroomingHero />
      <GroomingInfo />
      <GroomingServices />
      <PawsLocation />
      <GroomingProp />
      <Footer />
    </div>
  );
}
