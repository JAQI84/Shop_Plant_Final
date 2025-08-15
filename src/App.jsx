
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };
  const handleReturnClick = () => {
    setShowProductList(false);
  }

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
         <div className="landing_content">
         <h1>Bienvenidos a nuestra Tienda de Plantas</h1>
          <div className="divider"></div>
          <p>Donde el verde se encuentra con la serenidad</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Empecemos
          </button>
         </div>
          <div className="aboutus_container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList toLanding={handleReturnClick} />
      </div>
    </div>
  );
}

export default App;



