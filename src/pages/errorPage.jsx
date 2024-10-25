import { HeaderNav } from "../components/headerNAv";
import { Footer } from "../components/footer";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <>
      <HeaderNav />
      <span className="404">404</span>
      <h1 className="title-error"></h1>
      <Link to="/">Retourner sur la page 'acceuil</Link>
      <Footer />
    </>
  );
}
