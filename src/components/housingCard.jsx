import "./housingCard.scss";
import { Link } from "react-router-dom";

export function HousingCard({ title, cover }) {
  return (
    <figure className="housing-card">
      <img src={cover} alt={title} className="housing-card_img" />
      <figcaption className="housing-card_title">{title}</figcaption>
    </figure>
  );
}
