import React from "react";
import { useState } from "react";
import "./carousel.scss";

export function Carousel({ pictures, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0); // STATE TO TRACK THE INDEX
  const [fade, setFade] = useState(false); // STATE TO MANAGE THE FADE ANIMATION

  // METHOD TO DISPLAY THE PREVIOUS IMAGE
  function previousImg() {
    setFade(true); // ACTIVATES THE FADE EFFECT ON THE CURRENT IMAGE
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 350); // ANIMATION DURATION
  }
  // METHOD TU DISPLAY THE NEXT IMAGE
  function nextImg() {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((nextIndex) =>
        nextIndex === pictures.length - 1 ? 0 : nextIndex + 1
      );
      setFade(false);
    }, 350);
  }

  return (
    <div className="carousel">
      <div
        className={`carousel-img ${fade ? "fade" : ""}`} // ADDS FADE CLASS IF FADE IS TRUE OR NOT
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
        alt={alt}
      ></div>
      {pictures.length > 1 && ( // DO NOT DISPLAY THE COUNTER AND ARROWS IF THERE IS ONLY ONE IMAGE
        <>
          <div>
            <img
              onClick={previousImg} // ATTACH THE FONCTION TO THE CLICK EVENT ON THE ARROWS
              src="/assets/images/arrowLeft.png"
              alt="Arrow left"
              className="arrow arrowLeft"
            />
          </div>
          <div>
            <img
              onClick={nextImg}
              src="/assets/images/arrowRight.png"
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
