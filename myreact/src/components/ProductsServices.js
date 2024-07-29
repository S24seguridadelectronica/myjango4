import React from 'react';
import './ProductsServices.css';
import productImage1 from '../images/2.jpg';
import productImage2 from '../images/3.jpg';
import WhatsAppButton from './WhatsAppButton';

const ProductsServices = () => {
  return (
    <div className="products-services">
      <h2>Productos y Servicios</h2>
      <div className="images-container">
        <div className="product-item">
          <img src={productImage1} alt="Producto 1" className="product-image" />
          <WhatsAppButton phoneNumber="3158859744" message="Estoy interesado en el Producto 1" />
        </div>
        <div className="product-item">
          <img src={productImage2} alt="Producto 2" className="product-image" />
          <WhatsAppButton phoneNumber="1234567890" message="Estoy interesado en el Producto 2" />
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;
