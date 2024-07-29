import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsServices from './components/ProductsServices'; // Importa el componente ProductsServices
import ImageCarousel from './components/ImageCarousel'; // Importa el componente ImageCarousel

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsServices />
      <Features />
      <ImageCarousel /> {/* Agrega el componente ImageCarousel aquí */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
