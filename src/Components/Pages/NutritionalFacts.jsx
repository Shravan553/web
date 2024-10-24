import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './NutritionalFacts.css';
import NavbarTYP from './Navbar/NavbarTYP';
import potatoNutritionImg from '../../assets/nutri1.png'; // Import the image

import skinImg from '../../assets/1.jpg'; // Import your images
import immuneImg from '../../assets/imune-system.jpg';
import digestiveImg from '../../assets/Digestive Health.jpg'; 
import hypoallergenicImg from '../../assets/glu.jpg';

import roastedPotatoesImg from '../../assets/1.jpg';
import mashedPotatoesImg from '../../assets/2.jpg';
import frenchFriesImg from '../../assets/3.jpg';
import potatoSaladImg from '../../assets/5.jpg';
import potatoSoupImg from '../../assets/4.jpg';
import potato from '../../assets/6.jpg';
import program from '../../assets/couchpotato.jpg';
import skinitem from '../../assets/skinitem1.png';
import Footer from '../Footer/Footer';
import Scroll from './scroll';

const testimonials = [
  {
     
      feedback: "Potatoes are a nutrient-dense food that provides essential vitamins and minerals, making them a great addition to a balanced diet.",
      position: "A Nutritional Treasure"
  },
  {
     
      feedback: "A medium potato contains more potassium than a banana, making it a powerhouse for maintaining proper bodily functions.",
      position: "Nutrient-Rich Delight"
  },
  {
    
      feedback: "With their diverse preparation methods, potatoes can be enjoyed in countless dishes, making healthy eating delicious and fun!",
      position: "Fuel Your Diet with Potatoes"
  }
];

const recipesData = [
  { title: 'Roasted Potatoes', image: roastedPotatoesImg },
  { title: 'Mashed Potatoes', image: mashedPotatoesImg },
  { title: 'French Fries', image: frenchFriesImg },
  { title: 'Potato Salad', image: potatoSaladImg },
  { title: 'Potato Soup', image: potatoSoupImg },
  { title: 'Potato Garlic Dish', image: potato },
];
const benefitsData = [
  { title: 'Benefits to Skin', image: skinitem, link: '/skin' },
  { title: 'Benefits to the Immune System', image: immuneImg, link: '/immune' },
  { title: 'Digestive Health', image: digestiveImg, link: '/digestive' },
];
const NutritionalFacts = () => {
  const recipesSectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFullContent, setShowFullContent] = useState(false);
  const slidesToShow = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (recipesData.length - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (recipesData.length - slidesToShow + 1)) % (recipesData.length - slidesToShow + 1));
  };

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  return (
    <div className="nutri-container">
      <NavbarTYP />

      {/* Hero Section */}
      <section className="hero-sections">
        <div className="hero-image-container">
          <img src={program} alt="Hero" className="hero-image" />
          <svg className="wave" viewBox="0 0 1440 320">
            <path fill="#fff" d="M0,96L30,112C60,128,120,160,180,165.3C240,171,300,149,360,149.3C420,149,480,171,540,186.7C600,203,660,213,720,202.7C780,192,840,160,900,149.3C960,139,1020,149,1080,160C1140,171,1200,181,1260,160C1320,139,1380,85,1410,64L1440,43L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
        </div>
        <div className="hero-overlay">
          <h1 className="hero-title">Nutritional Facts</h1>
          <p className="hero-subtitle">An In-Depth Guide to Nutritional Essentials for a Vibrant, Healthy Life!</p>
        </div>
      </section>


      <section className="nutripage-section">
      <div className="nutripage-container">
        <h2 className="nutripage-title">Potato Health Benefits</h2>
        <p className="nutripage-content">
          Potatoes are not just delicious but also packed with essential nutrients that support overall health. They are rich in vitamins like Vitamin C and B6, which boost immunity and promote brain health. The high potassium content helps regulate blood pressure, while the fiber aids in digestion. Including potatoes in your diet can provide a balanced source of energy while contributing to a healthy gut and heart. Whether boiled, baked, or mashed, this versatile vegetable is a nutrition powerhouse.
        </p>
      </div>
    </section>

      
      <section>
        
        <br>
        
        </br>
      </section>

      <div className="nutripage-testimonials">
            <h2>"Why Potatoes Are a Nutritional Powerhouse"</h2>
            <div className="testimonial-cards">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-position">{testimonial.position}</p>
                    </div>
                ))}
            </div>
        </div>

      <section className="benefits-section">
      <h2>Benefits of Potatoes</h2>
      <div className="benefits-container">
        {benefitsData.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <h3>{benefit.title}</h3>
            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
            <Link to={benefit.link} className="benefit-button">Click Me</Link>
          </div>
        ))}
      </div>
    </section>

      <section className="potato-nutrition-details-section">
  <h2 className="nutrition-title">Health Benefits of Potatoes: Nutritional Impact on Human Well-being</h2>
  <div className="nutrition-content">
    <img src={potatoNutritionImg} alt="Potato Nutrition" className="nutrition-image" />
    <div className="nutrition-text">
      <ul className="nutrition-benefits-list">
        <li><strong>Rich in Vitamins & Minerals </strong> Potatoes are packed with vitamins C and B6, supporting immune function and metabolism.</li>
        <li><strong>High in Dietary Fiber </strong> Promotes digestive health and helps in weight management.</li>
        <li><strong>Steady Energy Source </strong> Complex carbohydrates provide a consistent energy source, ideal for active lifestyles.</li>
        <li><strong>Antioxidants </strong> Potatoes help combat oxidative stress, supporting overall health and disease prevention.</li>
        <li><strong>Gluten-Free </strong> Naturally gluten-free, suitable for people with gluten sensitivities or celiac disease.</li>
        <li><strong>Culinary Versatility </strong> Can be boiled, baked, mashed, or fried, making potatoes a versatile ingredient in many dishes.</li>
      </ul>
    </div>
  </div>
</section>



      <section className="potato-nutrition-details-section">
  <h2 className="nutrition-title">Details about Potato Nutrition</h2>
  <div className="nutrition-cards-containers">
    <div className="nutrition-cards">
      <h3>Vitamins & Minerals</h3>
      <p>Potatoes are rich in essential vitamins and minerals, including vitamin C and B6, which support immune function and metabolism.</p>
    </div>
    <div className="nutrition-cards">
      <h3>Dietary Fiber</h3>
      <p>They are an excellent source of dietary fiber, promoting digestive health and aiding in weight management.</p>
    </div>
    <div className="nutrition-cards">
      <h3>Energy Source</h3>
      <p>The complex carbohydrates in potatoes provide a steady source of energy, making them ideal for active lifestyles.</p>
    </div>
    <div className="nutrition-cards">
      <h3>Antioxidants</h3>
      <p>Potatoes contain antioxidants that combat oxidative stress, contributing to overall health.</p>
    </div>
    <div className="nutrition-cards">
      <h3>Gluten-Free</h3>
      <p>Naturally gluten-free, potatoes are a safe choice for those with gluten intolerance or celiac disease.</p>
    </div>
    <div className="nutrition-cards">
  <h3>Bone Strength</h3>
  <p>The calcium, iron, and phosphorus in potatoes support bone structure, strength, and overall bone health.</p>
</div>
<div className="nutrition-cards">
  <h3>Hydration</h3>
  <p>With their high water content, potatoes can contribute to hydration, making them particularly beneficial in hot climates.</p>
</div>
    <div className="nutrition-cards">
      <h3>Culinary Versatility</h3>
      <p>They can be boiled, baked, mashed, or fried, making them a beloved ingredient in various cuisines.</p>
    </div>
  </div>
  <p className="nutrition-description">
    {showFullContent && (
      <>
      Potatoes are a nutrient-dense food that provide a wealth of health benefits,
       making them much more than just a starchy vegetable. Rich in essential vitamins and minerals, 
       including vitamin C, which boosts immune function, and vitamin B6, which supports brain health and 
       cognitive development, they are also an excellent source of potassium, a key nutrient for regulating blood 
       pressure and promoting heart health. Their high fiber content aids in digestion by supporting healthy gut 
       bacteria and preventing constipation, while the presence of antioxidants like flavonoids and carotenoids helps 
       neutralize harmful free radicals in the body, reducing the risk of chronic diseases such as heart disease and 
       
       cancer. Additionally, potatoes are naturally gluten-free and can be a valuable energy source, making them suitable
        for a wide variety of diets. Their versatility in cooking allows them to be prepared in countless ways,
       making it easy to incorporate them into balanced meals that benefit overall health.
      </>
    )}
  </p>
  {!showFullContent && (
    <button onClick={toggleContent} className="read-more-button">Read More</button>
  )}
</section>
<Scroll/>
<Footer />


    </div>
  );
};

export default NutritionalFacts;   