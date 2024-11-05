import React, { useState } from "react";
import "./collapse.scss";

export const Collapse = ({ title, content }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggleCollapse = () => {
    setIsopen(!isOpen);
  };

  return (
    // CREATE THE TITLE DIV, WICH GETS 'OPEN CLASS CLICKED
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
        {/* VERIFY IF THE CONTENT IS AN OBJECT */}
        {typeof content === "object" ? (
          // IF IS AN OBJECT, MAP IT TO CREATE UNORDERED LIST
          <ul className={`collapse-content ${isOpen ? "show" : ""}`}>
            {Object.keys(content).map((key) => (
              <li key={key}>{content[key]}</li>
            ))}
          </ul>
        ) : (
          // OTHERWISE, DISPLAY A PARAGRAPH WITH THE STRING CONTENT
          <p className={`collapse-content ${isOpen ? "show" : ""}`}>
            {content}
          </p>
        )}
      </>
    </div>
  );
};
