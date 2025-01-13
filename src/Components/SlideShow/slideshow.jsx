import React, { useState, useEffect } from "react";
import "./slideshow.css";


const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer); 
  }, [images.length, interval]);

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
   
    <div className="text">
      <h1>Find Your Dream Car</h1>
    <div className="content-container">
         
      <div className="sub-content">
        <p>
          Ready to find your dream car? <br />
          <br /> 
          Start by listing your must-haves,<br />
          then hit the web for reviews and deals. <br />
          Test drive your top picks and feel the thrill. <br />
          Happy hunting!
        </p>
        <button className="b">Join us </button>
      </div>
        <div className="slideshow-container"> 
          <div
            className="slideshow-slide"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
  
          <button className="slideshow-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="slideshow-button next" onClick={nextSlide}>
            &#10095;
          </button>
  
          <div className="slideshow-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
   
  );
  
};

export default Slideshow;
