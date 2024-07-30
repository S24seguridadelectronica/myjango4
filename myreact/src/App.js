// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsServices from './components/ProductsServices'; // Muestra productos y servicios
import ImageCarousel from './components/ImageCarousel'; // Carrusel de imágenes

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsServices /> {/* Muestra productos y servicios */}
      <ImageCarousel /> {/* Carrusel de imágenes */}
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
