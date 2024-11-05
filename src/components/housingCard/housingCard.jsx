import React from "react";


export function HousingCard({ title, cover }) { // DEFINE THE PROPS TITLE AND COVER
  return (
    <figure className="housing-card">
      <img src={cover} alt={title} className="housing-card_img" />
      <figcaption className="housing-card_title"><p className="limited-text">{title}</p></figcaption>
    </figure>
  );
}
