import React from 'react';
import './Export.css';
import Export1 from '../../assets/Export1.jpg';
import Export2 from '../../assets/Export2.jpeg'; // Update with your export image paths
import Export3 from '../../assets/Export3.jpeg'; // Update with your export image paths
import Export4 from '../../assets/Export4.jpeg';
import Footer from "../../Components/Footer/Footer";

 // Update with your export image paths
 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const Export = () => {
  return (
    <div className="export-excellence-wrapper">
      {/* Header Section with Image */}
      <div className="export-excellence-header">
        <img src={Export1} alt="Export Excellence Header" className="exportheader-image" />
        <h1 className="exportheader-title">Export Excellence</h1>
      </div>

      {/* Potatoes Export Section */}
      <div className="potato-export-section">
        <h2 className="potato-export-title">Potatoes Export</h2>
        <p className="potato-export-description">
        Exports have played a pivotal role in agpotato's growth since its inception, with a focus on delivering a diverse range of potato products such as potato fries, potato flour, and potato milk to various regions across India.
 Before the pandemic, we aimed to venture into the European markets by establishing partnerships with retail chains in the Netherlands.
With a modern facility and the ability to set up distribution across India, agpotato aims to play an important role in marketing and selling potato products within the country.
        </p>
      </div>

      {/* Export Images Section */}
      <div className="export-images">
        <h2 className="export-title">Export Images</h2>
        <div className="export-image-gallery">
          <img src={Export2} alt="Export Image 1" className="export-image" />
          <img src={Export3} alt="Export Image 2" className="export-image" />
          <img src={Export4} alt="Export Image 3" className="export-image" />
        </div>
      </div>
      {/* Scroll to Top Button */}
<button onClick={scrollToTop} className="scroll-to-top">
        Scroll to Top
      </button>
      <Footer/>
    </div>
  );
};

export default Export;
