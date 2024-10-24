import React from 'react';
import { motion } from 'framer-motion';
import './fries.css';
import videoFile from '../../../assets/video3.mp4'; 
import oil from '../../../assets/oil.png'; 
import rust from '../../../assets/rust.png'; 
import salt from '../../../assets/salt.png';
import heroImage from '../../../assets/friesHeroImage.jpg'; // Change to a relevant image for fries
import NavbarTYP from '../Navbar/NavbarTYP'; 
import ket from '../../../assets/ket.png';
import mo from '../../../assets/mo.png';
import Footer from '../../Footer/Footer';
const Fries = () => {
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
          <img src={heroImage} alt="French Fries" className="hero-image" />
          <div className="hero-text">
            <h1>Delicious French Fries</h1>
            <p>Crispy and golden, these French fries are the perfect side dish for any meal!</p>
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
          <p>Follow this step-by-step video tutorial to create delicious homemade French fries.</p>
        </div>
      </section>
      <section className="ingredients-section">
        <h2>Ingredients for French Fries</h2>
        <div className="ingredient-grid">
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <img src={rust} alt="Russet Potatoes" className="ingredient-img" />
            <p>4 large Russet potatoes</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={oil} alt="Oil" className="ingredient-img" />
            <p>Oil for frying</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <img src={salt} alt="Salt" className="ingredient-img" />
            <p>Salt and pepper for seasoning</p>
          </motion.div>
          
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <img src={ket} alt="Ketchup" className="ingredient-img" />
            <p>Ketchup (optional for serving)</p>
          </motion.div>
          <motion.div className="ingredient-card" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 }}>
            <img src={mo} alt="Mayonnaise" className="ingredient-img" />
            <p>Mayonnaise (optional for serving)</p>
          </motion.div>
        </div>
      </section>
      <section className="steps-section">
        <h2>Steps to Make French Fries</h2>
        <motion.ol initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <li>Wash and peel the potatoes, then cut them into thin strips.</li>
          <li>Soak the potato strips in cold water for at least 30 minutes.</li>
          <li>Heat oil in a deep pan over medium-high heat.</li>
          <li>Drain the potatoes and pat them dry with a towel.</li>
          <li>Fry the potatoes in batches until golden brown and crispy.</li>
          <li>Remove from oil, drain on paper towels, and season with salt and pepper.</li>
          <li>Serve hot with ketchup or mayonnaise.</li>
        </motion.ol>
      </section>
      <Footer />
    </div>
  );
};

export default Fries;
