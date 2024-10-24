import React from "react";
import Slider from "react-slick";
import "./TypesOfPotatoes.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";
// Import your potato images
import russetImage from "../../assets/russet.jpg";
import fingerImage from "../../assets/finger.jpg";
import yellowImage from "../../assets/yellow.jpg";
import redImage from "../../assets/red.jpg";
import purpleImage from "../../assets/chipsona.jpg";
import alooDhokla from "../../assets/russet1.png";
import alooBukharaRed from "../../assets/red1.png";
import alooKesar from "../../assets/yellow1.png";
import alooBukharaWhite from "../../assets/white1.png";
import alooChipsona from "../../assets/purple1.png";
import fingerlingPotatoes from "../../assets/finger1.png";
import diversityIcon from "../../assets/diversity.png";
import flavorIcon from "../../assets/flavor.png";
import nutritionIcon from "../../assets/nutrit.png";
import cookingIcon from "../../assets/cooking.png";
import Footer from "../Footer/Footer";
import Scroll from './scroll';
// Slider data
const potatoTypes = [
  {
    title: "Russet",
    description: "Great for baking and mashing due to their fluffy texture.",
    imageUrl: russetImage,
    link: "/russet",
  },
  {
    title: "Fingerling",
    description: "Small, waxy potatoes perfect for roasting and salads.",
    imageUrl: fingerImage,
    link: "/finger",
  },
  {
    title: "Yellow",
    description: "A buttery-textured potato that's great for all kinds of dishes.",
    imageUrl: yellowImage,
    link: "/yellow",
  },
  {
    title: "Red",
    description: "Best for soups and salads due to their firm texture.",
    imageUrl: redImage,
    link: "/red",
  },
  {
    title: "Chipsona",
    description: "Specially grown for making crispy chips!",
    imageUrl: purpleImage,
    link: "/chip",
  },
];
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const TypesOfPotatoes = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <div className="potato-slider-containers">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>Types of Potatoes</h1>
          <p>Discover different types of potatoes and their delicious uses.</p>
        </div>
      </div>
      <div className="slider-box">
        <Slider {...settings}>
          {potatoTypes.map((potato, index) => (
            <div className="slider-item" key={index}>
              <img
                src={potato.imageUrl} // Keep the image source for layout
                alt={potato.title}
                className="slider-image" // Ensure this class has styles for proper display
              />
              <h2 className="slider-title">{potato.title}</h2>
              <p className="slider-description">{potato.description}</p>
              <Link to={potato.link}>
                <button className="know-more-btn">Know More</button>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      {/* Additional Content */}
      <div className="additional-content">
        <div className="centered-section">
          <h2>How Many Types of Potatoes Are There?</h2>
          <p>
            There are more than 200 varieties of potatoes sold throughout the United States. Each of these varieties fits into one of seven potato type categories: russet, red, white, yellow, blue/purple, fingerling, and petite.
            Potatoes can be used to fuel the body and the brain throughout the day. Easy to prepare and pair with a variety of cuisines, potatoes lend themselves to convenient meal prep to fuel you throughout the week.
            They can be whipped together with a few healthy ingredients and ready to serve under 30 minutes for a delicious meal.
            These versatile tubers can be transformed into countless dishes, from creamy mashed potatoes to crispy French fries, and are an essential ingredient in many culinary traditions worldwide.
          </p>
        </div>
        <h2>Common Types of Potatoes in India</h2>
        <div className="potato-types-container">
          <div className="potato-type" onClick={() => scrollToSection("russet-section")}>
            <img src={alooDhokla} alt="Aloo Dhokla" className="potato-image" />
            <strong>Aloo Dhokla (Russet Potato)</strong>
          </div>
          <div className="potato-type" onClick={() => scrollToSection("red")}>
            <img src={alooBukharaRed} alt="Aloo Bukhara" className="potato-image" />
            <strong>Aloo Bukhara (Red Potato)</strong>
          </div>
          <div className="potato-type" onClick={() => scrollToSection("yel")}>
            <img src={alooKesar} alt="Aloo Kesar" className="potato-image" />
            <strong>Aloo Kesar (Yellow Potato)</strong>
          </div>
          <div className="potato-type" onClick={() => scrollToSection("whi")}>
            <img src={alooBukharaWhite} alt="Aloo Bukhara White" className="potato-image" />
            <strong>Aloo Bukhara (White Potato)</strong>
          </div>
          <div className="potato-type" onClick={() => scrollToSection("purp")}>
            <img src={alooChipsona} alt="Aloo Chipsona" className="potato-image" />
            <strong>Aloo Chipsona (Purple Potato)</strong>
          </div>
          <div className="potato-type" onClick={() => scrollToSection("finger")}>
            <img src={fingerlingPotatoes} alt="Fingerling Potatoes" className="potato-image" />
            <strong>Fingerling Potatoes</strong>
          </div>
        </div>
        {/* Unique Content Section */}
        <div className="unique-content-section">
          <h2>Unique Varieties of Potatoes</h2>
          <p>
            <img src={diversityIcon} alt="Diversity Icon" className="icon" />
            Beyond the common types, there are unique potato varieties that showcase the diversity of this beloved vegetable...
          </p>
          <p>
            <img src={flavorIcon} alt="Flavor Icon" className="icon" />
            Fingerling potatoes, with their elongated shape, offer a unique texture and flavor profile...
          </p>
          <p>
            <img src={cookingIcon} alt="Cooking Icon" className="icon" />
            Exploring these unique potatoes can elevate your culinary creations and introduce new flavors...
          </p>
        </div>
        {/* Cards Section */}
      {/* Info Card Section with Links */}
<div className="info-cards">
  <div id="russet-sections" className="card-contents">
    <div className="card-titles">
      <h2>Russet Potatoes</h2>
    </div>
    <div className="card-infos">
      <p>
        Russet potatoes are known for their fluffy texture and are great for baking and mashing. They are rich in carbohydrates and provide a good source of dietary fiber.
      </p>
      <p>
        Additionally, their high starch content makes them perfect for dishes that require crispy exteriors, like roasted potatoes. Russet potatoes are a versatile staple in both home kitchens and restaurants.
      </p>
      {/* <Link to="/russet">Learn more about Russet Potatoes</Link> Linked text */}
    </div>
  </div>
</div>
<div className="info-cards">
  <div id="red" className="card-contents">
    <h2>Red Potatoes</h2>
    <div className="card-infos">
      <p>
        Red potatoes are firm and waxy, making them ideal for roasting, boiling, and adding to salads. Their skin adds a pop of color to dishes.
      </p>
      <p>
        Due to their waxy texture, red potatoes hold their shape well when cooked, making them excellent for dishes like potato salads or casseroles.
      </p>
      {/* <Link to="/red">Learn more about Red Potatoes</Link> Linked text */}
    </div>
  </div>
</div>
<div className="info-cards">
  <div id="yel" className="card-contents">
    <h2>Yellow Potatoes</h2>
    <div className="card-infos">
      <p>
        Yellow potatoes are rich, creamy, and slightly sweet. They hold their shape when boiled and are great for mashing and roasting.
      </p>
      <p>
        Their natural buttery flavor makes them an excellent choice for dishes that need minimal seasoning.
      </p>
      {/* <Link to="/yellow">Learn more about Yellow Potatoes</Link> Linked text */}
    </div>
  </div>
</div>
<div className="info-cards">
  <div id="whi" className="card-contents">
    <h2>White Potatoes</h2>
    <div className="card-infos">
      <p>
        White potatoes have a mild, earthy flavor and are great for grilling, roasting, and sautéing. Their thin skin and creamy flesh make them a popular choice for potato salads.
      </p>
      {/* <Link to="/white">Learn more about White Potatoes</Link> Linked text */}
    </div>
  </div>
</div>
<div className="info-cards">
  <div id="purp" className="card-contents">
    <h2>Purple Potatoes</h2>
    <div className="card-infos">
      <p>
        Purple potatoes have a deep color and nutty flavor, making them an eye-catching addition to meals. They're best for roasting, mashing, or baking.
      </p>
      {/* <Link to="/purple">Learn more about Purple Potatoes</Link> Linked text */}
    </div>
  </div>
</div>
<div className="info-cards">
  <div id="finger" className="card-contents">
    <h2>Fingerling Potatoes</h2>
    <div className="card-infos">
      <p>
        Fingerling potatoes are small, elongated, and firm. They're ideal for roasting and serving as a side dish, with a waxy texture that holds up well in cooking.
      </p>
      {/* <Link to="/fingerling">Learn more about Fingerling Potatoes</Link> Linked text */}
    </div>
  </div>
</div>
        </div>
        <Scroll/>
        <Footer />
    </div>
  );
};
export default TypesOfPotatoes;