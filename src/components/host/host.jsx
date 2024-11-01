import React from "react";
import "./host.scss";

export function Host({ name, portrait }) {
  // pour séparer le nom et prénom
  const spaceIndex = name.lastIndexOf(` `); // on définit l'espace entre le nom et le prénom
  const firstName = name.substring(0, spaceIndex); // on sélectionne tout les caractères jusqu'au spaceIndex
  const lastName = name.substring(spaceIndex + 1); // on selectionne tout les caractères après le spaceIndex

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
