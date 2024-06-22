import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./components/contact/Contact.jsx";
import Therapy from "./components/therapy/Therapy.jsx";
import Kennel from "./components/Kennel/Kennel.jsx";
import Grooming from "./components/grooming/Grooming.jsx";
import Home from "./components/cemetary/Home.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="app">
      {!menuClicked && (
        <div className="app-container">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  menuClicked={menuClicked}
                  setMenuClicked={setMenuClicked}
                />
              }
            />
            <Route
              path="Kennel"
              element={
                <Kennel
                  menuClicked={menuClicked}
                  setMenuClicked={setMenuClicked}
                />
              }
            />
            <Route
              path="Grooming"
              element={
                <Grooming
                  menuClicked={menuClicked}
                  setMenuClicked={setMenuClicked}
                />
              }
            />
            <Route
              path="Therapy"
              element={
                <Therapy
                  menuClicked={menuClicked}
                  setMenuClicked={setMenuClicked}
                />
              }
            />
            <Route
              path="Contact"
              element={
                <Contact
                  menuClicked={menuClicked}
                  setMenuClicked={setMenuClicked}
                />
              }
            />
          </Routes>
        </div>
      )}
      {menuClicked && (
        <div className="mobile-menu-container">
          <span
            className="exit-button"
            onClick={() => {
              setMenuClicked(!menuClicked);
            }}
          >
            X
          </span>
          <div className="mobile-menu-items">
            <Link
              to="/"
              className="px-3 "
              onClick={() => {
                setMenuClicked(!menuClicked);
              }}
            >
              Home
            </Link>
            <Link
              to="/Kennel"
              className="px-3"
              onClick={() => {
                setMenuClicked(!menuClicked);
              }}
            >
              Kennel
            </Link>
            <Link
              to="/Grooming"
              className="px-3"
              onClick={() => {
                setMenuClicked(!menuClicked);
              }}
            >
              Grooming
            </Link>
            <Link
              to="/Therapy"
              className="px-3"
              onClick={() => {
                setMenuClicked(!menuClicked);
              }}
            >
              Therapy
            </Link>
            <Link
              to="/Contact"
              className="px-3"
              onClick={() => {
                setMenuClicked(!menuClicked);
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
