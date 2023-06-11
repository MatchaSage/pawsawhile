import React from "react";
import Header from "../Header";
import PawsHero from "./PawsHero";
import PawsAbout from "./PawsAbout";
import PawsGrounds from "./PawsGrounds";

import Footer from "../Footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <PawsHero />
      <PawsAbout />
      <PawsGrounds />
      <Footer />
    </div>
  );
}
