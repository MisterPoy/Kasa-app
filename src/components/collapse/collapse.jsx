import React, { useState } from "react";
import "./collapse.scss";

export const Collapse = ({title, content}) => {

  const [isOpen, setIsopen] = useState(false);

  const toggleCollapse = () => {
    setIsopen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img 
        src="/src/assets/arrowDown.png" 
        alt="arrow" 
        className= {`collapse-arrow ${isOpen ? "open" : ""}`}/>
      </div>
      <div className= {`collapse-content ${isOpen ? "show" : ""}`}>{content}</div>
    </div>
  )
}
