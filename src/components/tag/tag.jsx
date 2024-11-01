import React, { useEffect, useRef, useState } from "react";
import "./tag.scss";

export function Tag({ tags }) {
  const tagRefs = useRef([]); // stocker des références aux éléments <p>
  console.log(tagRefs);
  const [maxWidth, setMaxWidth] = useState(0); // hook pour stocker la largeur calculé

  useEffect(() => {
    // offsetWidth récupère la largeur en pixels de tout les tag
    const widths = tagRefs.current.map((tag) => (tag ? tag.offsetWidth : 0));
    // methode qui retourne la largeur du plus grand élément
    const calculatedMaxWidth = Math.max(...widths);
    // on affecte la valeur sur le state
    setMaxWidth(calculatedMaxWidth);
    console.log(maxWidth);
  }, [tags]); // on affecte les tags en dépendance pour recalculer si les tags changent

  console.log(`${maxWidth}px`);

  return (
    <>
      {tags.map((tag, index) => (
        <p
          key={index}
          ref={(el) => (tagRefs.current[index] = el)} // on stocke cuaque élèment <p> dans tagRefs
          style={maxWidth ? { width: `${maxWidth}px` } : {}}
        >
          {tag}
        </p>
      ))}
    </>
  );
}
