import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/paws_logo.png";
import menuIcon from "../../public/images/menu-icon.png";

export default function Header(props) {
  return (
    <header className="fixed-top">
      <nav className="d-flex justify-content-between align-items-center p-2">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Paws Logo" />
          </Link>
        </div>
        <div className="navigation-container px-3">
          <Link to="/" className="px-3 ">
            Home
          </Link>
          <Link to="/Grooming" className="px-3">
            Grooming
          </Link>
          <Link to="/Therapy" className="px-3">
            Therapy
          </Link>
          <Link to="/Contact" className="px-3">
            Contact
          </Link>
        </div>
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="px-3 menu-icon"
          onClick={() => {
            props.setMenuClicked(!props.menuClicked);
          }}
        />
      </nav>
    </header>
  );
}
