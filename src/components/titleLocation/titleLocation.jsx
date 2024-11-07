import React from "react";
import "./titleLocation.scss";

export function TitleLocation({ title, location }) {
  return (
    <div className="titleLocation">
      <h2 className="housingTitle">{title}</h2>
      <p>{location}</p>
    </div>
  );
}
