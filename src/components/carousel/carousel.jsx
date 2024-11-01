import { useState } from "react";
import "./carousel.scss";

export function Carousel({ pictures, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0); // state pour suivre l'index
  const [fade, setFade] = useState(false); // state pour gérer l'animation de fondu

  // methode pour afficher l'image précédente
  function previousImg() {
    setFade(true); // active le fondu de l'image actuelle
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 350); // durée de l'animation
  }
  // methode pour afficher l'image suivante
  function nextImg() {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((nextIndex) =>
        nextIndex === pictures.length - 1 ? 0 : nextIndex + 1
      );
      setFade(false);
    }, 350); // durée de l'animation
  }

  return (
    <div
      className="carousel"
      /* style={{ backgroundImage: `url(${pictures[currentIndex]})` }} */
    >
      <div
        className={`carousel-img ${fade ? "fade" : ""}`}
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
        alt={alt}
      ></div>
      {pictures.length > 1 && (
        <>
          <div>
            <img
              onClick={previousImg}
              src="/src/assets/arrowLeft.png"
              alt="Arrow left"
              className="arrow arrowLeft"
            />
          </div>
          <div>
            <img
              onClick={nextImg}
              src="/src/assets/arrowRight.png"
              alt="Arrow right"
              className="arrow arrowRight"
            />
          </div>
          <div className="img-count">{`${currentIndex + 1}/${
            pictures.length
          }`}</div>
        </>
      )}
    </div>
  );
}
