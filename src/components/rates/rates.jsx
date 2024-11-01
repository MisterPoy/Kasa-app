import React from "react";
import inactiveStar from "../../assets/inactiveStar.png";
import activeStar from "../../assets/activeStar.png";
import "./rates.scss";

export function Rates({ rating }) {
  const maxRating = 5; // on declare le nombre max d'étoile

  return (
    <div className="rates">
      {/*creation d'un tableau vide de la longueur de la note max */}
      {Array.from({ length: maxRating }).map((star, index) => (
        // créer chaque image
        <img
          key={index}
          src={index < rating ? activeStar : inactiveStar}
          alt="star"
        />
      ))}
    </div>
  );
}
