import React from "react";
import "./titleLocation.scss";

export function TitleLocation({ title, location }) {
  return (
    <div className="title-location">
      <h3 className="housingTitle">{title}</h3>
      <p>{location}</p>
    </div>
  );
}
