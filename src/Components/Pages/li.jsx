import React from 'react';
import { Phone } from 'lucide-react';
import './li.css';
import { Link } from 'react-router-dom';

// Import the main image
import tre from '../../assets/fd.png';

const Li = () => {
  return (
    <div className="priority-pixels-section">
      <div className="image-section">
        <img src={tre} alt="Woman on phone" className="main-image" />
       
      </div>
   
      <div className="content-section">
      <h2 className="title">Potato Nutrition</h2>
        <div className="gradient-bar"></div>

        <h4>Fueling Performance</h4>
        <p5>Potatoes are a nutrient-dense powerhouse, that provides the energy, potassium, and vitamin C you need to fuel your day.</p5>

        <h4>Get the Facts</h4>
        <p5>Potatoes are more energy-packed than any other popular vegetable, are an excellent source of vitamin C and have more potassium than a banana.</p5>

        <h4>In Your Diet</h4>
        <p5>Potatoes are naturally fat-free, cholesterol-free, and sodium-free with only 110 calories per 5.3-ounce serving.</p5>
        
        <div className="button-container">
        <Link to="/AboutUS" className="button about-us">ABOUT US</Link>
          <Link to="/nutritional-facts" className="button our-team">FACTS</Link>
        </div>
      </div>

      {/* Add Potato Nutrition Section Below */}
      <div className="nutrition-section">
        
      </div>
    </div>
  );
};

export default Li;
