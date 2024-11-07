import React from "react";
import "./housing.scss";
import { Carousel } from "../components/carousel/carousel";
import housingsArray from "../data/annonces.json";
import { Navigate, useParams } from "react-router-dom";
import { TitleLocation } from "../components/titleLocation/titleLocation";
import { Host } from "../components/host/host";
import { Tag } from "../components/tag/tag";
import { Rates } from "../components/rates/rates";
import { Collapse } from "../components/collapse/collapse";

export function Housing() {
  // RETRIEVE THE ID OF THE LISTING ASSOCIATED WITH THE DYNAMIC PAGE
  const { id } = useParams();
  // RETRIEVE HOUSING DATA FROM THE JSON FILE
  const selectedHousing = housingsArray.find((housing) => housing.id === id);

  if (!selectedHousing) {
    // REDIRECT TO THE ERROR PAGE IF THE HOUSING IS NOT FOUND
    return <Navigate to="/error" replace />;
  }

  // DESTRUCTURE THE SELECTEDHOUSING OBJECT TO EXTRACT ITS PROPERTIES AS CONSTANTS
  // PFOR EASIER USE AS PROPS IN COMPONENTS CALLS
  const {
    title,
    location,
    tags,
    pictures,
    host,
    rating,
    description,
    equipments,
  } = selectedHousing;

  return (
    <>
      <div className="housingSheet">
        <Carousel pictures={pictures} alt="any" />
        <div className="titleAndHosContainer">
          <div className="housingTitleSection">
            <TitleLocation title={title} location={location} />
            <div className="tagsContainer">
              <Tag tags={tags} />
            </div>
          </div>
          <div className="hostRateContainer">
            <Host name={host.name} portrait={host.picture} />
            <Rates rating={rating} />
          </div>
        </div>
        <div className="housingDetailsContainer">
          <Collapse title="Description" content={description} />

          <Collapse title="Équipements" content={equipments} />
        </div>
      </div>
    </>
  );
}
