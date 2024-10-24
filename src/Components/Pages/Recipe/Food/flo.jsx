import React from 'react';
import './flo.css'; // Separate CSS file for Potato Flour
import Navbar1 from '../../Navbar/Navbar1';
import Footer from '../../../Footer/Footer';
import potatoFlourImage from '../../../../assets/flo.webp';
import cookingIcon from '../../../../assets/cooking.png'; // Icon for cooking

const Flor = () => {
    return (
        <section>
            {/* Header Section */}
            <div className="header-section">
                <Navbar1 />
                <div className="header-content">
                    <h1>Potato Flour</h1>
                    <p>Discover the versatility and health benefits of potato flour!</p>
                </div>
            </div>

            {/* Potato Flour Details */}
            <div className="potato-flour-container">
                <h2 className="section-title">What is Potato Flour?</h2>
                <div className="product-info">
                    <img src={potatoFlourImage} alt="Potato Flour" className="product-image" />
                    <p className="product-description">
                        Potato flour is made from whole peeled potatoes, cooked, dried, and ground into a fine powder. It is 
                        commonly used in gluten-free baking and as a thickener in soups, sauces, and stews. Potato flour 
                        provides moisture, structure, and a soft texture to baked goods.
                    </p>
                </div>

                {/* Nutritional Information */}
                <h2 className="section-title">Nutritional Information (Per 100g Serving)</h2>
                <div className="nutrition-info">
                    {[
                        { label: 'Calories', value: '357 kcal' },
                        { label: 'Fat', value: '0.3g' },
                        { label: 'Sodium', value: '55mg' },
                        { label: 'Carbohydrates', value: '83g' },
                        { label: 'Fiber', value: '5.9g' },
                        { label: 'Sugars', value: '3.5g' },
                        { label: 'Protein', value: '6.9g' },
                        { label: 'Potassium', value: '1460mg' },
                    ].map((nutrient, index) => (
                        <div className="nutrient" key={index}>
                            <p><strong>{nutrient.label}:</strong> {nutrient.value}</p>
                        </div>
                    ))}
                </div>

                {/* Health Benefits Section */}
                <h2 className="section-title">Health Benefits</h2>
                <ul className="benefits-list">
                    <li>Gluten-free and suitable for people with celiac disease</li>
                    <li>Rich in fiber, promoting digestive health</li>
                    <li>Low in fat and calories</li>
                    <li>Contains high amounts of potassium for heart health</li>
                    <li>Great source of vitamins and minerals</li>
                </ul>

                {/* Usage and Preparation */}
                <h2 className="section-title">How to Use Potato Flour</h2>
                <div className="usage-section">
                    <img src={cookingIcon} alt="Cooking Icon" className="usage-icon" />
                    <p className="usage-text">
                        Potato flour is excellent for adding moisture to baked goods like breads, muffins, and pancakes. It can 
                        also be used as a thickening agent for soups, sauces, and gravies. Use it in combination with other 
                        gluten-free flours for the best results. Try adding 1-2 tablespoons to your favorite recipes for a 
                        smooth, soft texture.
                    </p>
                </div>

                {/* Potential Drawbacks */}
                <h2 className="section-title">Potential Drawbacks</h2>
                <p className="drawbacks-text">
                    While potato flour is a nutritious and versatile ingredient, it is high in carbohydrates, which may not 
                    be suitable for low-carb diets. Also, it absorbs a lot of liquid, so be cautious when using it as a 
                    thickener, as it can make your dishes gummy if overused.
                </p>
            </div>

            {/* Footer Section */}
            <Footer />
        </section>
    );
};

export default Flor;
