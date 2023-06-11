import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import Grooming from "./components/grooming/Grooming.jsx";
import Home from "./components/cemetary/Home.jsx";

export default function App() {
  const [hasMounted, setHasMounted] = useState(false);
  //Use effect concept to fix the refresh bug.
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  } else {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Grooming" element={<Grooming />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    );
  }
}
