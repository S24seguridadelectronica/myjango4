import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
