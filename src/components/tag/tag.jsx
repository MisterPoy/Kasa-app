import React, { useEffect, useRef, useState } from "react";
import "./tag.scss";

export function Tag({ tags }) {
  // STORE REFERENCE TO THE <P> ELEMENT CREATED BY MAP
  // TO ACCESS THEM WITHOUT TRIGGERING A RE-RENDER
  const tagRefs = useRef([]); 
  // USESTATE TO STORE THE CALCULATED MAXUMUM LENGTH AMONG THE <P> ELEMENT
  const [maxWidth, setMaxWidth] = useState(0); 

  useEffect(() => {
    // GET THE WIDTH OF THE TAGS STORED IN TAGREFS USING OFFSETWIDTH 
    const widths = tagRefs.current.map((tag) => (tag ? tag.offsetWidth : 0));
    // CALCULATE THE LARGEST ONE
    const calculatedMaxWidth = Math.max(...widths);
    // UPDATE THE STATE WITH THE MAXIMUM WIDTH
    setMaxWidth(calculatedMaxWidth);    
  }, []); // LEAVE THE DEPENDENCY ARRAY EMPTY SO ITS ONLY RUNS ON MOUNT

  return (
    <>
      {tags.map((tag, index) => (
        <p
          key={index}
          ref={(el) => (tagRefs.current[index] = el)} // STORE EACH <P> ELEMENT IN TAGREFS TO MESURE THEIR DIMENSIONS LATER
          style={maxWidth ? { width: `${maxWidth}px` } : {}}
          // APPLY THE CALCULATED WIDTH IF DEFINED, OTHERWISE KEEP THE DEFAULT WIDTH
        >
          {tag}
        </p>
      ))}
    </>
  );
}
