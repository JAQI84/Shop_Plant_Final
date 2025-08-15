import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

function AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Bienvenido nuestra tienda de Plantas, donde el verde se encuentra con la serenidad!</p>
      <p className="about-us-content">
      En nuestra tienda de Plantas, nos apasiona acercarte la naturaleza. Nuestra misión es ofrecer una amplia gama de plantas de alta calidad que no solo realzan la belleza de tu entorno, sino que también contribuyen a un estilo de vida más saludable y sostenible. Desde plantas purificadoras de aire hasta plantas aromáticas, tenemos algo para todos los amantes de las plantas.
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        Nuestro equipo de expertos se dedica a garantizar que cada planta cumpla con nuestros estrictos estándares de calidad y cuidado.
        Tanto si eres un jardinero experimentado como si estás empezando tu camino hacia la jardinería ecológica, estamos aquí para apoyarte en cada paso. Explora nuestra colección, haz preguntas y déjanos ayudarte a encontrar la planta perfecta para tu hogar u oficina.
      </p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Únete a nuestra misión de crear un mundo más verde y saludable. Visita Paradise Nursery hoy mismo y experimenta la belleza de la naturaleza a tu alcance.
      </p>
    </div>
  );
}

export default AboutUs;
