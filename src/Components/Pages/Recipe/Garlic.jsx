import React from 'react';
import { motion } from 'framer-motion';
import './Garlic.css';
import videoFile from '../../../assets/video1.mp4'; 
import but from '../../../assets/but.png'; 

import gar from '../../../assets/chop gar.png'; 
import potatoIm from '../../../assets/potato.png'; 
import salt from '../../../assets/salt.png';
import par from '../../../assets/par.png'; 
import heroImage from '../../../assets/garlic1.png'; 
import NavbarTYP from '../Navbar/NavbarTYP'; 
import Footer from '../../Footer/Footer';
const Garlic = () => {
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
          <img src={heroImage} alt="Garlic Chopped Potato" className="hero-image" />
          <div className="hero-text">
            <h1>Delicious Garlic Chopped Potato</h1>
            <p>Warm up with this comforting, flavorful garlic chopped potato recipe that's perfect for any meal.</p>
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
          <p>Follow this step-by-step video tutorial to create a delicious garlic chopped potato dish.</p>
        </div>
      </section>
      <section className="ingredients-section">
        <h2>Ingredients</h2>
        <div className="ingredient-grid">
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={potatoIm} alt="Potato" className="ingredient-img" />
            <p>Medium size boiled potato - 500 gms</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={but} alt="Butter" className="ingredient-img" />
            <p>Butter - 125 gms</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <img src={gar} alt="Garlic" className="ingredient-img" />
            <p>Chopped garlic - 1/4 cup</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <img src={par} alt="Parsley" className="ingredient-img" />
            <p>Chopped fresh parsley - a palmful</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <img src={salt} alt="Salt" className="ingredient-img" />
            <p>Salt - to taste</p>
          </motion.div>
        </div>
      </section>
      <section className="steps-section">
        <h2>Steps to Make Garlic Chopped Potato</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Heat butter in a pot over medium heat.</li>
          <li>Add chopped garlic and sauté until fragrant.</li>
          <li>Add boiled potatoes and mash them slightly.</li>
          <li>Pour in vegetable broth, bring to a boil, then reduce heat and simmer.</li>
          <li>Stir in chopped parsley, season with salt to taste, and serve hot.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Garlic;
