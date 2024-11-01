import React, { useState } from "react";
import "./collapse.scss";

export const Collapse = ({ title, content }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggleCollapse = () => {
    setIsopen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        <p>{title}</p>
        <img
          src="/src/assets/arrowDown.png"
          alt="arrow"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>
      <>
        {/* on verifie si le content est un objet et pas une chaîne de caractères */}
        {typeof content === "object" ? (
          //si c'est un objet on map en créabt une liste non ordonnée
          <ul className={`collapse-content ${isOpen ? "show" : ""}`}>
            {Object.keys(content).map((key) => (
              <li key={key}>{content[key]}</li>
            ))}
          </ul>
        ) : (
          //sinon affiche un paragraphe
          <p className={`collapse-content ${isOpen ? "show" : ""}`}>
            {content}
          </p>
        )}
      </>
    </div>
  );
};
