import React from 'react';
import { motion } from 'framer-motion';
import './Soup.css';
import videoFile from '../../../assets/video.mp4'; 
import garlicImage from '../../../assets/garlic.png'; 
import onionImage from '../../../assets/onion.png'; 
import potatoImage from '../../../assets/potato.png'; 
import mixImage from '../../../assets/mix.png';
import carrot from '../../../assets/carrot.png'; 
import heroImage from '../../../assets/soup.png'; 
import NavbarTYP from '../Navbar/NavbarTYP'; 
import Footer from '../../Footer/Footer';
const Soup = () => {
  return (
    <div className="recipe-page-container">
      <NavbarTYP />
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={heroImage} alt="Potato Soup" className="hero-image" />
          <div className="hero-text">
            <h1>Delicious Potato Soup</h1>
            <p>Warm up with this comforting, creamy potato soup recipe that's perfect for any day.</p>
          </div>
        </motion.div>
      </section>
      <section className="video-section">
        <motion.video
          src={videoFile}
          controls
          className="recipe-video"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="video-description">
          <h2>Watch How to Make It</h2>
          <p>Follow this step-by-step video tutorial to create a delicious bowl of potato soup.</p>
        </div>
      </section>
      <section className="ingredients-section">
        <h2>Ingredients</h2>
        <div className="ingredient-grid">
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={potatoImage} alt="Potato" className="ingredient-img" />
            <p>Potatoes - 5 medium</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={onionImage} alt="Onion" className="ingredient-img" />
            <p>Onion - 1 large, chopped</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={garlicImage} alt="Garlic" className="ingredient-img" />
            <p>Garlic - 2 cloves, minced</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={mixImage} alt="Mix" className="ingredient-img" />
            <p>Mix - as needed</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={carrot} alt="Carrot" className="carrot" />
            <p>2 Carrots - Chopped in Small</p>
          </motion.div>
        </div>
      </section>
      <section className="steps-section">
        <h2>Steps to Make Potato Soup</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Heat some oil in a pot and sauté onions and garlic until soft.</li>
          <li>Add chopped potatoes and vegetable broth, then bring to a boil.</li>
          <li>Lower the heat and simmer until the potatoes are tender.</li>
          <li>Blend the soup until smooth, season with salt and pepper, and serve hot.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Soup;
