import React from "react";
import { HeaderNav } from "../components/headerNAv/headerNAv";
import { Footer } from "../components/footer/footer";
import { Link } from "react-router-dom";
import "./errorPage.scss";

export function ErrorPage() {
  return (
    <>
      <HeaderNav />
      <span className="txt404">404</span>
      <h2 className="title-error">Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to="/" className="returnHome">Retourner sur la page d&apos;acceuil</Link>
      <Footer />
    </>
  );
}
