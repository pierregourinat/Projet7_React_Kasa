import React, { useState } from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carouselBtn Left" onClick={prevSlide}>
        <img src="../arrow-left.png" alt="Previous" />
      </button>
      <img src={images[currentIndex]} alt="Carousel" className="carouselImg" />
      <button className="carouselBtn Right" onClick={nextSlide}>
        <img src="../arrow-right.png" alt="Next" />
      </button>
    </div>
  );
}

export default Carousel;
