import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';  // Importa los estilos globales

// Importa los estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
