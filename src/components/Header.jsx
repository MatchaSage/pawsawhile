import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav className="d-flex justify-content-between">
        <div className="logo-container">Logo</div>
        <div className="navigation-container">
          <Link to="/">Home</Link>
          <Link to="/Grooming">Grooming</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
