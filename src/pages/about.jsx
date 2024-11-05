import React from "react";
import { Banner1 } from "../components/banner/banner1";
import "./about.scss";
import { Collapse } from "../components/collapse/collapse";
import aboutList from "../data/aboutList.json"; // IMPORT THE JSON FILE FOR ABOUT


export function About() {
  
  return (
    <>
      <Banner1 page="about" />
      <div className="collapse-container">
        {aboutList.map((item, index) => ( // CREATE A COLLAPSE COMPONENT FOR EACH WITH TITLE AND CONTENT
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
}
