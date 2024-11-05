import React from "react";
import inactiveStar from "../../assets/inactiveStar.png";
import activeStar from "../../assets/activeStar.png";
import "./rates.scss";

export function Rates({ rating }) {
  const maxRating = 5; // DECLARE THE MAXIMUM NUMBER OF STARS

  return (
    <div className="rates">
      {/*CREATE AN EMPTY ARRAY WITH THE LENGTH OF THE MAXIMUM RATING */}
      {Array.from({ length: maxRating }).map((star, index) => (
        // FOR EACH CREATE A IMG
        <img
          key={index}
          src={index < rating ? activeStar : inactiveStar} // IF THE INDEX IS LESS THAN THE RATING
          // SET AN ACTIVE STAR, OTHERWIS, SET AN INACTIVE STAR
          alt="star"
        />
      ))}
    </div>
  );
}
