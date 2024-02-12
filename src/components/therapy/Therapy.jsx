import React from "react";
import Header from "../Header";
import TherapyHero from "./TherapyHero";
import TherapyInfo from "./TherapyInfo";
import Footer from "../Footer";
export default function Therapy() {
  return (
    <div className="therapy">
      <Header />
      <TherapyHero />
      <TherapyInfo />
      <Footer />
    </div>
  );
}
