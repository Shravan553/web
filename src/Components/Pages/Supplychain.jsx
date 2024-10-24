import React from 'react';
import './Supplychain.css';
import Footer from "../../Components/Footer/Footer";
import supplychainimage from '../../assets/supplychainimage.jpg';
import { FaTruck, FaUsers, FaClock } from "react-icons/fa";
import potatotractor from '../../assets/potatotractor.jpg';
import Gimage13 from '../../assets/Gimage13.jpeg';
import cs from '../../assets/coldstorage3.jpeg';
import about2 from '../../assets/about2.png';
import Gimage14 from '../../assets/Gimage14.jpeg';
import Scroll from './scroll';
const Supplychain = () => {
  return (
    <div className="supply-chain-wrapper">
      {/* Header Section with Image */}
      <div className="supply-chain-header">
        <img src={supplychainimage} alt="Potato Supply Chain Header" className="header-images" />
        <h1 className="header-titles">Potato Supply Chain</h1>
      </div>
<section className="supply-chain-meaning">
  <h2>Supply Chain</h2>
  <p>
    The <strong>potato supply chain</strong> encompasses all the processes involved
    in growing, harvesting, storing, processing, distributing, and delivering
    potatoes from farms to consumers. It ensures that potatoes maintain their
    quality through every stage, from cultivation to consumption, with a focus on
    efficient transportation and meeting customer demands year-round.
  </p>
</section>
      <section className="statistics-section">
      <div className="stats-container">
        <div className="stat-box">
          <FaTruck className="stat-icon" />
          <p>Exports</p>
          <h2>150+</h2>
        </div>
        <div className="stat-box">
          <FaUsers className="stat-icon" />
          <p>Users Visited</p>
          <h2>20,000+</h2>
        </div>
        <div className="stat-box">
          <FaClock className="stat-icon" />
          <p>Times Accessed</p>
          <h2>500+</h2>
        </div>
      </div>
      <img
        src={potatotractor}
        alt="Landscape"
        className="landscape-image"
      />
    </section>
<br>
</br>
<br>
</br>
    <section id="agpotato-info">
        <div class="info-box mission-box">
            <h3>Our Mission</h3>
            <p>
                At AGPotato, we are committed to fair pricing and sustainable agriculture.
                We empower our farmers and ensure premium quality potatoes for our customers.
            </p>
        </div>
        <div class="info-box opportunities-box">
            <h3>Business Opportunities</h3>
            <p>
                We offer flexible supply options tailored to meet diverse needs, ensuring
                competitive pricing and high-quality products for food manufacturers,
                retailers, and wholesalers.
            </p>
        </div>
    </section>
    <section className="sourcing-section">
            <div className="sourcing-content">
                <h2>Potato Farming</h2>
                <p>
                    We source our potatoes directly from local farmers, ensuring that every batch is fresh and of the highest quality.
                    This direct relationship with farmers allows us to support local agriculture while providing our customers with potatoes
                    that are harvested at peak ripeness. By minimizing the distance from farm to table, we ensure the potatoes maintain
                    their natural flavor and nutritional value.
                </p>
            </div>
            <div className="sourcing-image">
                <img
                    src={Gimage13} // Replace with your image URL
                    alt="Sourcing Potatoes"
                />
            </div>
        </section>
        <section className="cs-section">
            <div className="cs-image">
                <img
                    src={cs} // Replace with your image URL
                    alt="Cold Storage"
                />
            </div>
            <div className="cs-content">
                <h2>Cold Storage</h2> {/* Changed section name to CS */}
                <p>
                    Our state-of-the-art cold storage facilities are designed to maintain optimal temperature and humidity levels, preserving the quality of our potatoes.
                    Proper cold storage prevents spoilage and extends the shelf life of the produce, ensuring that our customers receive only the best products.
                </p>
                <ul>
                    <li>Maintains optimal conditions to preserve quality.</li>
                    <li>Prevents spoilage and extends shelf life.</li>
                    <li>Efficient management of stock for timely delivery.</li>
                    <li>Reduces waste and maximizes product availability.</li>
                </ul>
            </div>
        </section>
        <section className="sorting-grading-section">
            <div className="sorting-grading-content">
                <h2>Sorting and Grading</h2>
                <p>
                    At AGPotato, we prioritize quality in our sorting and grading processes. Our skilled team uses advanced technology to meticulously sort and grade our potatoes based on various parameters such as size, shape, and overall quality. This attention to detail ensures that only the finest potatoes are selected for our customers. By maintaining high standards throughout the sorting and grading process, we are able to provide products that consistently meet industry standards and satisfy customer expectations. Our commitment to quality allows us to build long-term relationships with our partners and ensures the reliability of our supply chain.
                </p>
            </div>
            <div className="sorting-grading-image">
                <img
                    src={about2} // Replace with your image URL
                    alt="Sorting and Grading"
                />
            </div>
        </section>
        <section className="prepackaging-section">
            <div className="prepackaging-image">
                <img
                    src={Gimage14} // Replace with your image URL
                    alt="Prepackaging Process"
                />
            </div>
            <div className="prepackaging-content">
                <h2>Prepackaging</h2>
                <ul>
                    <li>
                        Potatoes are pre-packaged based on customer requirements, ensuring convenience and precision.
                    </li>
                    <li>
                        We use industry-standard packaging materials to maintain freshness and extend shelf life.
                    </li>
                    <li>
                        Packaging sizes are flexible to meet the needs of retail stores, wholesalers, and institutional buyers.
                    </li>
                    <li>
                        Each package undergoes a final quality check to ensure consistency and meet high standards.
                    </li>
                    <li>
                        Proper labeling for easy tracking and compliance with industry regulations.
                    </li>
                </ul>
            </div>
        </section>
      {/* Content Section - The Stages of the Potato Supply Chain */}
      <div className="supply-chain-content">
        <h2>The Stages of the Potato Supply Chain</h2>
        <div className="supply-chains-steps">
          <div className="supply-chains-step">
            <h3>Farming/Production</h3>
            <p>Potatoes are cultivated and harvested by farmers.</p>
          </div>
          <div className="supply-chains-step">
            <h3>Storage</h3>
            <p>Potatoes are stored in controlled environments to maintain quality.</p>
          </div>
          <div className="supply-chains-step">
            <h3>Processing</h3>
            <p>Potatoes are processed into products like chips and fries.</p>
          </div>
          <div className="supply-chains-step">
            <h3>Distribution</h3>
            <p>Processed or raw potatoes are transported to retailers or food providers.</p>
          </div>
          <div className="supply-chains-step">
            <h3>Retail/Consumption</h3>
            <p>Potatoes are sold in stores or served in restaurants.</p>
          </div>
          <div className="supply-chains-step">
            <h3>Logistics/Transportation</h3>
            <p>Logistics ensure the efficient transport of potatoes between stages.</p>
          </div>
        </div>
      </div>
      <Scroll/>
      <Footer/>
    </div>
  );
};
export default Supplychain;