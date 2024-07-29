import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsServices from './components/ProductsServices'; // Importa el nuevo componente

function App() {
  return (
    <div className="App">
      <Header />
      <ProductsServices /> {/* Agrega el nuevo componente aquí */}
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
