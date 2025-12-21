import { useState } from "react";
import "./Slideshow.css";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const hasManyPictures = pictures.length > 1;

  function nextImage() {
    let newIndex = currentIndex + 1;

    if (newIndex >= pictures.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  }

  function prevImage() {
    let newIndex = currentIndex - 1;

    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }

    setCurrentIndex(newIndex);
  }

  return (
    <div className="slideshow">
      <img
        className="slideshow-image"
        src={pictures[currentIndex]}
        alt="Logement"
      />

      {hasManyPictures && (
        <>
          <button
            className="arrow left"
            onClick={prevImage}
            aria-label="previous"
          >
            ❮
          </button>

          <button
            className="arrow right"
            onClick={nextImage}
            aria-label="next"
          >
            ❯
          </button>

          <div className="dots">
            {pictures.map((picture, index) => (
              <span
                key={picture} 
                className={index === currentIndex ? "dot active" : "dot"}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
