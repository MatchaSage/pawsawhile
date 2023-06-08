import { useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Grooming from "./components/Grooming.jsx";
import Home from "./components/Home.jsx";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Grooming" element={<Grooming />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
