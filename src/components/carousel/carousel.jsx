import { useState } from "react";
import "./carousel.scss";

export function Carousel({ pictures, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0); // state pour suivre l'index

  // methode pour afficher l'image précédente
  function previousImg() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  }
  // methode pour afficher l'image suivante
  function nextImg() {
    setCurrentIndex((nextIndex) =>
      nextIndex === pictures.length - 1 ? 0 : nextIndex + 1
    );
  }

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
    >
      {pictures.length > 1 && (
        <>
          <div>
            <img
              onClick={previousImg}
              src="/src/assets/arrowLeft.png"
              alt="Arrow left"
              className="arrowLeft"
            />
          </div>
          <div>
            <img
              onClick={nextImg}
              src="/src/assets/arrowRight.png"
              alt="Arrow right"
              className="arrowRight"
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
