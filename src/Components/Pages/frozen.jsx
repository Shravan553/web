import React from 'react';
import './frozen.css';

// Importing images from the assets folder
import cheeseShotz from '../../assets/che.jpg';
import crinkleFries from '../../assets/cri.jpg';
import veggieFinger from '../../assets/veggie.jpg';
import hashBrown from '../../assets/hash.jpg';
import chilliGarlicBites from '../../assets/lic.jpg';
import herbChilliPatty from '../../assets/patty.jpg';
import spicyWedges from '../../assets/wedges.jpg';
import alooTikki from '../../assets/tikki.jpg';
import vegBurgerPatty from '../../assets/veg.jpg';
import Footer from '../Footer/Footer';
import Scroll from './scroll';

const products = [
  { name: 'Potato Cheese Shotz', image: cheeseShotz, description: 'Cheesy goodness in every bite.' },
  { name: 'Crinkle Cut French Fries', image: crinkleFries, description: 'Perfectly crispy crinkle-cut fries.' },
  { name: 'Veggie Finger', image: veggieFinger, description: 'Crispy veggie fingers, packed with flavor.' },
  { name: 'Hash Brown', image: hashBrown, description: 'Golden, crispy hash browns.' },
  { name: 'Chilli Garlic Bites', image: chilliGarlicBites, description: 'Spicy bites with a kick of garlic.' },
  { name: 'Herb Chilli Patty', image: herbChilliPatty, description: 'A flavorful herb and chili patty.' },
  { name: 'Spicy Wedges', image: spicyWedges, description: 'Seasoned, crispy potato wedges.' },
  { name: 'Aloo Tikki', image: alooTikki, description: 'Traditional, spiced aloo tikkis.' },
  { name: 'Veg Burger Patty', image: vegBurgerPatty, description: 'Juicy veg patties, perfect for burgers.' },
];

const Fro = () => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        
      ))}
      <Scroll/>
 <Footer/>
    </div>
    
  );
};

export default Fro;
