import React from 'react';
import './Potatobyproduct.css';
import Footer from '../Footer/Footer'; // Adjust the path if necessary
import { Link } from 'react-router-dom'; // Import Link for navigation

import potatoFlourImg from '../../assets/inflour.png';
import potatoMilkImg from '../../assets/inmilk.png';
import potatoFriesImg from '../../assets/infries.png';
import potatoGranulesImg from '../../assets/ingran.png';
import Scroll from './scroll';

const PotatoByproducts = () => {
  return (
    <div className="byproducts-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Potato Byproducts</h1>
          <p>Explore a variety of products made from potatoes, from flour to snacks!</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="info-section">
        <h2>About Our Potato Byproducts</h2>
        <p>
          We take pride in offering high-quality potato byproducts that cater to all your cooking and baking needs. 
          Potatoes are not only versatile and delicious but also packed with nutrients. Whether you're looking for gluten-free options, quick meal solutions, or tasty snacks, we've got you covered!
        </p>
        <p>
          Our potato byproducts are carefully sourced and crafted to ensure the best taste and texture. From enriching your dishes to providing convenience in your kitchen, these products are perfect for both home cooks and professional chefs alike.
        </p>
        <p>Here are some of our featured products:</p>
        <p>
          1. <strong>Potato Milk</strong>: A creamy, dairy-free alternative that is rich in vitamins and minerals, perfect for smoothies, coffee, and baking. It's an excellent choice for those with lactose intolerance or looking to reduce dairy intake.
        </p>
        <p>
          2. <strong>Potato Fries</strong>: Golden and crispy fries, made from fresh, high-quality potatoes. They are the ultimate comfort food and a perfect side dish for burgers, sandwiches, or as a snack for any occasion.
        </p>
        <p>
          3. <strong>Potato Granules</strong>: Instant potato granules that make meal prep quick and easy. Perfect for creating creamy mashed potatoes in minutes, they are also great for thickening soups and sauces.
        </p>
        <p>
          4. <strong>Potato Flour</strong>: A versatile ingredient used in baking, soups, and sauces. It's naturally gluten-free and adds a unique flavor and texture to your culinary creations.
        </p>
        <p>
          Explore our wide range of potato byproducts and discover new ways to enjoy the goodness of potatoes in your meals. At Kanna Store, we are committed to providing you with the best quality products that enhance your culinary experience.
        </p>
      </section>

      {/* Products Grid */}
      <section className="byproduct-grid">
        <div className="byproduct-card">
          <Link to="/flo">
            <img src={potatoFlourImg} alt="Potato Flour" />
          </Link>
          <h2>Potato Flour</h2>
          <p>A versatile ingredient used in baking, soups, and sauces. It's naturally gluten-free.</p>
        </div>

        <div className="byproduct-card">
          <Link to="/milk">
            <img src={potatoMilkImg} alt="Potato Milk" />
          </Link>
          <h2>Potato Milk</h2>
          <p>A creamy, dairy-free alternative that is rich in vitamins and minerals, perfect for smoothies and coffee.</p>
        </div>

        <div className="byproduct-card">
          <Link to="/fri">
            <img src={potatoFriesImg} alt="Potato Fries" />
          </Link>
          <h2>Potato Fries</h2>
          <p>Golden and crispy fries, a classic favorite for snacks or sides, made from fresh potatoes.</p>
        </div>

        <div className="byproduct-card">
          <Link to="/gra">
            <img src={potatoGranulesImg} alt="Potato Granules" />
          </Link>
          <h2>Potato Granules</h2>
          <p>Instant potato granules that are great for making mashed potatoes quickly and easily.</p>
        </div>
      </section>
      <Scroll/>
      <Footer />
    </div>
  );
};

export default PotatoByproducts;
