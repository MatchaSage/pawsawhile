import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import Grooming from "./components/grooming/Grooming.jsx";
import Home from "./components/cemetary/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const [hasMounted, setHasMounted] = useState(false);

  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Grooming" element={<Grooming />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
