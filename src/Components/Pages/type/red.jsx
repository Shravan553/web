import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './red.css'; // Update the CSS file name for red potatoes

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
// Importing images
import redPotato1 from '../../../assets/red1.jpg'; // Replace with your red potato images
import redPotato2 from '../../../assets/red2.jpg';
import redPotato3 from '../../../assets/red3.jpg';
import redPotato from '../../../assets/red.png'; // Main image for red potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Red = () => {
  return (
    <div className="red-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Red Potatoes</h1>
          <h2 className="subtitle">A Flavorful Option</h2>
          <p className="tagline">Nutritious, versatile, and delicious.</p>
          <p className="description">
            Red potatoes are known for their thin, red skin and moist, waxy flesh. They are perfect for roasting, boiling, and salads.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={redPotato} alt="Red Potato" className="potato-image" />
        </div>
      </main>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <img src={redPotato1} alt="Roasted Red Potato" />
        <img src={redPotato2} alt="Crispy Fried Red Potato" />
        <img src={redPotato3} alt="Mashed Red Potato Delight" />
      </section>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Red potatoes have smooth, red skin and creamy white flesh.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Waxy; holds its shape well after cooking.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Mild; slightly sweet; excellent for various dishes.
        </p>

        <h2 className="details-title">Best Served</h2>
        <ul className="best-served-list">
          <li>
            <img src={roastedImage} alt="Roasted" className="best-served-image" /> Roasted or Grilled
          </li>
          <li>
            <img src={sautéedImage} alt="Sautéed" className="best-served-image" /> Sautéed
          </li>
          <li>
            <img src={mashedImage} alt="Mashed" className="best-served-image" /> Mashed
          </li>
          <li>
            <img src={friedImage} alt="Fried" className="best-served-image" /> Fried
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Red;
