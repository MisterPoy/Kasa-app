import React from "react";
import "./headerNav.scss";
import { Link } from "react-router-dom";

export function HeaderNav() {
  return (
    <>
      <header className="header">
        {/* THE LOGO IS CLICKABLE AND REDIRECT TO THE HOMEPAGE */}
        <Link to="/">
          <img src="/assets/images/logoHeaderD.png" alt="Logo de Kasa" />
        </Link>
        <div className="navLinkContainer">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </div>
      </header>
    </>
  );
}
