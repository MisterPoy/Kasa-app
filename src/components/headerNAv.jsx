import "./headerNav.scss";
import { Link } from "react-router-dom";
import { About } from "../pages/about";

export function HeaderNav() {
  const logoHeader = "";

  return (
    <>
      <header className="header">
        <img src="src/assets/logoHeaderD.png" alt="Logo de Kasa" />
        <div className="navLinkContainer">
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </div>
      </header>
    </>
  );
}
