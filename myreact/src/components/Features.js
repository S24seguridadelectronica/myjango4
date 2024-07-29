import React from 'react';
import './Features.css';
import featureImage from '../images/4.jpg'; // Ajusta el path según la ubicación de tu archivo

function Features() {
  return (
    <section id="features" className="features">
      <div className="features-content">
        <div className="info">
          <h2>Nuestras Ventajas</h2>
          <div className="features-list">
            <div className="feature">
              <h3>Alta Calidad</h3>
              <p>Cámaras de alta resolución para una vigilancia clara y precisa.</p>
            </div>
            <div className="feature">
              <h3>Fácil Instalación</h3>
              <p>Proceso de instalación rápido y sin complicaciones.</p>
            </div>
            <div className="feature">
              <h3>Soporte 24/7</h3>
              <p>Asistencia técnica disponible en todo momento.</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={featureImage} alt="Características" />
        </div>
      </div>
    </section>
  );
}

export default Features;
