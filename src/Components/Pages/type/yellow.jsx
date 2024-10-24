import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './yellow.css';

import cookingGif from '../../../assets/cooking.gif'; // Optional cooking GIF
// Importing images
import yellowPotato1 from '../../../assets/yel1.jpg'; // Replace with your yellow potato images
import yellowPotato2 from '../../../assets/yel2.jpg';
import yellowPotato3 from '../../../assets/yel3.jpg';
import yellowPotato from '../../../assets/yellow.jpg'; // Main image for yellow potatoes
import roastedImage from '../../../assets/roasted12.png'; // Image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Image for mashed
import friedImage from '../../../assets/fried.png'; // Image for fried

const Yellow = () => {
  return (
    <div className="yellow-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Yellow Potatoes</h1>
          <h2 className="subtitle">A Delicious Choice</h2>
          <p className="tagline">Creamy, buttery, and versatile.</p>
          <p className="description">
            Yellow potatoes, often called "butter" potatoes, are known for their smooth, waxy skin and rich, buttery flavor. Their creamy texture makes them perfect for a variety of culinary applications, including mashing, roasting, and baking.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Image section */}
        <div className="image-content">
          <img src={yellowPotato} alt="Yellow Potato" className="potato-image" />
        </div>
      </main>

      {/* Image Gallery Section */}
      <section className="image-gallery">
        <img src={yellowPotato1} alt="Roasted Yellow Potato" />
        <img src={yellowPotato2} alt="Crispy Fried Yellow Potato" />
        <img src={yellowPotato3} alt="Mashed Yellow Potato Delight" />
      </section>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Yellow potatoes have smooth, yellow skin and a creamy yellow flesh that is often described as vibrant and appealing.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          They are creamy and smooth, holding their shape exceptionally well when cooked, making them ideal for various cooking methods.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          With a buttery and slightly sweet flavor, yellow potatoes add depth and richness to a wide array of dishes.
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

export default Yellow;
