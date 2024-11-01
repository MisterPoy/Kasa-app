import React from "react";
import "./housing.scss";
import { Carousel } from "../components/carousel/carousel";
import housingsArray from "../data/annonces.json";
import { useParams } from "react-router-dom";
import { TitleLocation } from "../components/title/titleLocation";
import { Tag } from "../components/tag/tag";

export function Housing() {
  // on récupère l'id de l'annonce rattaché à la page dynamique
  const { id } = useParams();
  console.log(id);
  // récupération des données du logement depuis le fichier JSON
  const selectedHousing = housingsArray.find((housing) => housing.id === id);
  console.log("avant la destructuration", { ...selectedHousing });
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

  console.log("apres la destructuration", { ...selectedHousing });
  console.log(selectedHousing.tags);

  console.log(tags[id]);

  return (
    <>
      <Carousel pictures={pictures} />
      <div className="housingTitleSection">
        <TitleLocation title={title} location={location} />
        <div className="tagsContainer">
          <Tag tags={tags} />
        </div>
      </div>
      <div className="hostRateContainer"></div>
      <div className="housingCollapseContainer"></div>
    </>
  );
}
