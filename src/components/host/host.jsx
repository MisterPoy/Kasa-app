import React from "react";
import "./host.scss";

export function Host({ name, portrait }) {
  // TO SEPARATE FIRST NAME AND LAST NAME
  const spaceIndex = name.lastIndexOf(` `); // DEFINE THE SPACING BETWEEN THE FIRST NAME AND THE LAST NAME
  const firstName = name.substring(0, spaceIndex); // SELECT ALL CHARACTERS UP TO THE SPACEINDEX
  const lastName = name.substring(spaceIndex + 1); // SELECT ALL CHARACTERS AFTER THE SPACEINDEX

  return (
    <div className="host">
      <p>
        {firstName}
        <br />
        {lastName}
      </p>
      <img src={portrait} alt={name} />
    </div>
  );
}
