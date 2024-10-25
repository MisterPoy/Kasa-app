import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./hounsingGallery.scss";
import { HousingCard } from "./housingCard";

export function HousingGallery() {

  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch('/data/annonces.json')
      .then(response => response.json())
      .then(data => setHousings(data))
      .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
  }, []);
 

  return (
    <>
      <section className="housing-gallery_container">

      {housings.map(housing => (
        <Link to={`/housing/${housing.id}`} key={housing.id}>
          <HousingCard 
            title={housing.title} 
            cover={housing.cover} 
          />
        </Link>
      ))}
      </section>
    </>
  );
}
