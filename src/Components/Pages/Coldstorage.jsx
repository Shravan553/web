import React from 'react';
import './Coldstorage.css';
import  coldstorage1  from '../../assets/coldstorage1.jpg';
import  coldstorage2  from '../../assets/coldstorage2.jpeg';
import  coldstorage3  from '../../assets/coldstorage3.jpeg';
import  coldstorage4  from '../../assets/Coldstorageimage1.jpg';
import Footer from "../../Components/Footer/Footer";
import { motion } from 'framer-motion';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


const Coldstorage = () => {
  return (
    
    <motion.section
      className="cold-storage"
      initial={{ opacity: 0, y: 50 }}  // Start off invisible and slightly shifted down
      whileInView={{ opacity: 1, y: 0 }}  // Become visible and slide up when in view
      transition={{ duration: 0.6 }}  // Animation duration
      viewport={{ once: true, amount: 0.2 }}  // Trigger once when 20% of the element is visible
    >
    <div className="cold-storage-wrapper">
      {/* Header Section with Image */}
      <div className="cold-storage-header">
        <img src={coldstorage4} alt="Cold Storage Header" className="header-image" />
        <h1 className="header-title">Cold Storage</h1>
      </div>
      <section className="cold-store">
      <h2 className="cold-store-title">Cold Storage Facilities</h2>
      <p className="cold-store-description">
        AGPotato’s cold storage facilities are designed to maintain optimal conditions
        for preserving the freshness and quality of potatoes throughout the year. Equipped
        with advanced temperature and humidity control systems, these storage units minimize
        spoilage and extend shelf life, ensuring a consistent supply for customers. By reducing
        post-harvest losses, AGPotato supports sustainable practices and enhances profitability
        for farmers and businesses alike. The cold storage infrastructure plays a crucial role in
        maintaining the nutritional value and appearance of potatoes, making them ready for markets,
        processing industries, and exports, regardless of seasonal changes.
      </p>
    </section>
{/* Image Gallery Section */}
<div className="cold-storage-gallery1">
        <h2>Cold Storage Facilities Gallery</h2>
        <div className="gallery-grid1">
          <img src={coldstorage2} alt="Cold Storage 1" className="gallery-image1" />
          <img src={coldstorage3} alt="Cold Storage 2" className="gallery-image1" />
          <img src={coldstorage2} alt="Cold Storage 3" className="gallery-image1" />
          <img src={coldstorage3} alt="Cold Storage 4" className="gallery-image1" />
        </div>
      </div>
      {/* Cold Storage Section */}
      <div className="cold-storage-section">
        <h2>Importance of Cold Storage in the Potato Supply Chain</h2>
        <p>
          Cold storage plays a crucial role in preserving the quality of potatoes post-harvest. By maintaining an optimal temperature and humidity level,
          cold storage facilities help extend the shelf life of potatoes, prevent spoilage, and reduce losses during transportation and storage. This process
          ensures that the potatoes remain fresh, retain their nutritional value, and meet market demands year-round. Cold storage is especially important for
          preserving the texture and flavor of potatoes, preventing sprouting and dehydration.
        </p>
      </div>
      {/* Additional Cold Storage Section */}
      <div className="cold-storage-benefits">
        <h2>Benefits of Cold Storage</h2>
        <ul>
          <li>Maintains potato quality for extended periods.</li>
          <li>Prevents spoilage and reduces post-harvest losses.</li>
          <li>Ensures year-round supply of fresh potatoes.</li>
          <li>Helps stabilize prices in the market by controlling supply.</li>
          <li>Supports the export of potatoes to international markets.</li>
        </ul>
      </div>
      {/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
<Footer/>
    </div>
    </motion.section>
  );
};
export default Coldstorage;








