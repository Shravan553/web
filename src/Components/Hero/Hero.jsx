import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/is1.jpg';
import img2 from '../../assets/ma.png';
import img3 from '../../assets/mb.png';
import img4 from '../../assets/hey.jpg';
const slides = [
  {
    image: img1,
    heading: "agpotato-Innovative Farming Techniques",
    description: "AGPotato pioneers modern and sustainable farming methods to help farmers maximize their potato yields."
  },
  {
    image: img2,
    heading: "agpotato - Leading the Way in Farming Innovation",
    description: "At AGPotato, we champion cutting-edge, sustainable farming techniques, empowering farmers to optimize their potato crops for maximum yield and quality."
  },
  {
    image: img3,
    heading: "agpotato - Revolutionizing Sustainable Farming",
    description: "AGPotato transforms potato farming with advanced eco-friendly techniques, ensuring higher yields while fostering a sustainable agricultural future."
  },
  {
    image: img4,
    heading: "agpotato - Innovating for a Greener Future",
    description: "By embracing sustainable farming practices, AGPotato leads the charge in helping farmers boost potato production while preserving the environment."
  }
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change slide every 9 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-text">
              <h1>{slide.heading}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
        <div className="slider-controls">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;