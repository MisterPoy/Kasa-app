import React from 'react';
import { Link } from 'react-router-dom';
import "./hounsingGallery.scss";
import { HousingCard } from "../housingCard/housingCard";
import housingsArray from '../../data/annonces.json'; // IMPORT THE JSON FILE INTO THE HOUSINGSARRAY VARIABLE

export function HousingGallery() {
  
  return (
    <>
      <section className="housing-gallery_container">

      {housingsArray.map(housing => ( // ON MAP SUR LE TABLEAU POUR CREER UNE CARD A CHAQUE OBJET
      // CREATE A LINK THAT REDIRECTS TO A DYNAMIC PAGE CORRESPONDING TO THE CARD'S ID
        <Link to={`/housing/${housing.id}`} key={housing.id}>
          <HousingCard 
            title={housing.title} // PROP TITLE FOR THE NAME OF THE HOUSING
            cover={housing.cover} // PROP COVER FOR THE URL OF THE COVER IMAGE
          />
        </Link>
      ))}
      </section>
    </>
  );
}
