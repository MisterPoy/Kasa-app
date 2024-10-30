import React from 'react';
import { Link } from 'react-router-dom';
import "./hounsingGallery.scss";
import { HousingCard } from "../housingCard/housingCard";
import housingsArray from '../../data/annonces.json';

export function HousingGallery() {
    
  /* CODE POUR REQUETE API
  
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    fetch('/src/data/annonces.json')
      .then(response => response.json())
      .then(data => setHousings(data))
      .catch(error => console.error('Erreur lors du chargement des données JSON:', error));
  }, []);
 console.log(housingsArray); */

  return (
    <>
      <section className="housing-gallery_container">

      {housingsArray.map(housing => (
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
