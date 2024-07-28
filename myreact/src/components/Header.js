// src/components/Header.js
import React from 'react';
import './Header.css';
import cameraImage from '../images/1.jpg'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <header className="header">
      <div className="info-section">
        <h1>Venta e Instalación de Cámaras de Seguridad</h1>
        <p>Ofrecemos soluciones completas de seguridad para tu hogar y negocio.</p>
        <ul>
          <li>Instalación profesional</li>
          <li>Soporte técnico 24/7</li>
          <li>Equipos de alta calidad</li>
          <li>Presupuestos personalizados</li>
        </ul>
      </div>
      <div className="image-section">
        <img src={cameraImage} alt="Cámara de Seguridad" />
      </div>
    </header>
  );
};

export default Header;
