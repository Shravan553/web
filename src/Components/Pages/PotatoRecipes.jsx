import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PotatoRecipes.css';
import dots from "../../assets/dots.png";
import banner from '../../assets/banner.png';
import rightArrow from '../../assets/right_arrow.png';
import NavbarTYP from './Navbar/NavbarTYP';
import roastedPotatoesImg from '../../assets/1.jpg';
import mashedPotatoesImg from '../../assets/2.jpg';
import frenchFriesImg from '../../assets/3.jpg';
import potatoSaladImg from '../../assets/5.jpg';
import potatoSoupImg from '../../assets/4.jpg';
import potato from '../../assets/6.jpg';
import Footer from '../Footer/Footer';
import Scroll from './scroll';
const recipesData = [
  { title: 'Roasted Potatoes', description: 'Classic Roasted potatoes.', image: roastedPotatoesImg,link:'/rost' },
  { title: 'Mashed Potatoes', description: 'Creamy, buttery, perfect side dish.', image: mashedPotatoesImg,link:'/Mash' },
  { title: 'French Fries', description: 'Golden, crispy, worldwide favorite.', image: frenchFriesImg,link:'/Fries' },
  { title: 'Potato Salad', description: 'Cold dish with mayo, mustard, vegetables.', image: potatoSaladImg, link: '/Salad' },
  { title: 'Potato Soup', description: 'Comforting, warm, perfect for cold days.', image: potatoSoupImg, link: '/Soup' },
  { title: 'Potato Garlic Dish', description: 'Good in taste.', image: potato, link: '/Garlic' }
];
const PotatoRecipes = () => {
  const recipesSectionRef = useRef(null);
  const [showRecipes, setShowRecipes] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Array(recipesData.length).fill(false));
  const handleExploreClick = () => {
    setShowRecipes(!showRecipes);
    if (!showRecipes) {
      recipesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.recipe-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleCards(prev => {
            const newVisibleCards = [...prev];
            newVisibleCards[index] = true;
            return newVisibleCards;
          });
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="recipes-container">
      <NavbarTYP />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Potato Recipes</h1>
          <p className="hero-subtitle">
            Explore a world of potato flavors from chefs to home cooks!
          </p>
        </div>
      </section>
      {/* Recipes Grid */}
      <div className="recipes-grid">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 1.3 }}
          className='recipes-dots'>
          <img src={dots} width={25} alt="dots" />
        </motion.div>
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          src={banner}
          className="recipes-banner"
          alt="Banner"
        />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          className="recipes-content">
          <h1 className="text-potato">Potato</h1>
          <h1 className="text-recipes">Recipes</h1>
          <p className="recipes-description">
            Explore a world of flavors with innovative twists and classic recipes.
          </p>
          <button className="recipes-btn" onClick={handleExploreClick}>
            {showRecipes ? 'Hide Recipes' : 'Explore Recipes'}
            <img src={rightArrow} width={7} height={7} className="ml-2 mt-1" alt="arrow" />
          </button>
        </motion.div>
      </div>
      {/* Recipes Section */}
      <motion.section
        ref={recipesSectionRef}
        className="recipes-list-section"
        initial={{ height: 0, opacity: 0 }}
        animate={showRecipes ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="recipes-list-title">Discover Our Recipes</h2>
        <div className="recipes-card-grid">
          {recipesData.map((recipe, index) => (
            <motion.div
              key={index}
              className={`recipe-card ${visibleCards[index] ? 'visible' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {recipe.link ? (
                <Link to={recipe.link} className="recipe-link">
                  <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                  <h3 className="recipe-title">{recipe.title}</h3>
                  <p className="recipe-description">{recipe.description}</p>
                </Link>
              ) : (
                <>
                  <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                  <h3 className="recipe-title">{recipe.title}</h3>
                  <p className="recipe-description">{recipe.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Scroll/>
      <Footer />
    </div>
  );
};
export default PotatoRecipes;