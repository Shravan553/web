import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './finger.css';

import cookingGif from '../../../assets/cooking.gif';
// Importing images
import fingerling1 from '../../../assets/fin23.jpg'; // Replace with your fingerling images
import fingerling2 from '../../../assets/fin24.jpg';
import fingerling3 from '../../../assets/fin25.jpg';
import finger from '../../../assets/finger.jpg';
import roastedImage from '../../../assets/roasted12.png'; // Add your image for roasted
import sautéedImage from '../../../assets/sauted.png'; // Add your image for sautéed
import mashedImage from '../../../assets/mashed.png'; // Add your image for mashed
import friedImage from '../../../assets/fried.png'; // Add your image for fried

const Finger = () => {
  return (
    <div className="fingerling-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Fingerling</h1>
          <h2 className="subtitle">Potatoes</h2>
          <p className="tagline">A unique twist in every bite.</p>
          <p className="description">
            Fingerling potatoes are a unique variety, known for their small, elongated shape and rich flavor. Their distinct size and color make them perfect for a variety of culinary applications, from roasting to salads.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Move the image section here */}
        <div className="image-content">
          <img src={finger} alt="Fingerling Potato" className="potato-image" />
        </div>
      </main>

      {/* Normal Image Gallery Section */}
      <section className="image-gallery">
        <img src={fingerling1} alt="Delicious Roasted Fingerling" />
        <img src={fingerling2} alt="Crispy Fried Fingerling" />
        <img src={fingerling3} alt="Mashed Fingerling Delight" />
        {/* You can add more images here if needed */}
      </section>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Small, elongated, and can be a variety of colors including yellow, purple, and red; with smooth skin and waxy flesh.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Waxy; moist; holds its shape well when cooked.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Rich; nutty; buttery flavor.
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

export default Finger;
