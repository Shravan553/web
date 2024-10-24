import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import NavbarTYP from '../Navbar/NavbarTYP';
import './russet.css';

import cookingGif from '../../../assets/cooking.gif';
// Importing images
import rus1 from '../../../assets/rus1.jpg';
import rus2 from '../../../assets/rus2.jpg';
import rus3 from '../../../assets/rus3.jpg';
import bakedImage from '../../../assets/baked.png';  // Add your image for baked
import friedImage from '../../../assets/fried.png';  // Add your image for fried
import mashedImage from '../../../assets/mashed.png'; // Add your image for mashed
import sautéedImage from '../../../assets/sauted.png'; // Add your image for sautéed

const Russet = () => {
  return (
    <div className="russet-potatoes">
      <NavbarTYP />
      <header className="header">
        <div className="logo">
          {/* Add your logo here */}
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1 className="titles">Russet</h1>
          <h2 className="subtitle">Potatoes</h2>
          <p className="tagline">Versatility runs in the family.</p>
          <p className="description">
            Russet potatoes deliver an unparalleled cooking experience with all your dishes. Every potato connects effortlessly with your recipes and packs rich, high-quality flavor into an innovative natural design.
          </p>
          <button className="see-details-btn">See Full Details</button>
        </div>

        {/* Move the image section here */}
        <div className="image-content">
        <img src={rus2}  alt="Russet Potato" className="potato-image" />
        </div>
      </main>

      {/* Normal Image Gallery Section */}
      <section className="image-gallery">
        <img src={rus1} alt="Delicious Baked Russet" />
        <img src={rus2} alt="Crispy Fried Russet" />
        <img src={rus3} alt="Mashed Russet Delight" />
        {/* You can add more images here if needed */}
      </section>

      <section className="details-section">
        <h2 className="details-title">Appearance</h2>
        <p className="details-text">
          Medium to large, oblong, or slightly flattened oval, light to medium brown russet-brown, netted skin, white to pale yellow flesh.
        </p>

        <h2 className="details-title">Texture</h2>
        <p className="details-text">
          Floury, dry; light and fluffy; hearty skin that is chewy when cooked.
        </p>

        <h2 className="details-title">Flavor</h2>
        <p className="details-text">
          Mild; earthy; medium sugar content.
        </p>

        <h2 className="details-title">Best Served</h2>
        <ul className="best-served-list">
          <li>
            <img src={bakedImage} alt="Baked" className="best-served-image" /> Baked or Roasted
          </li>
          <li>
            <img src={sautéedImage} alt="Pan Fried" className="best-served-image" /> Pan Fried or Sautéed
          </li>
          <li>
            <img src={mashedImage} alt="Mashed" className="best-served-image" /> Mashed
          </li>
          <li>
            <img src={friedImage} alt="Fried" className="best-served-image" /> Fried
          </li>
        </ul>
      </section>

      <section className="fun-gif-section">
        <h2>Watch How to Prepare</h2>
        <Link to="/rost"> {/* Wrap the GIF in a Link */}
          <img src={cookingGif} alt="Cooking Russet Potatoes" className="cooking-gif" />
        </Link>
      </section>
    </div>
  );
};

export default Russet;
