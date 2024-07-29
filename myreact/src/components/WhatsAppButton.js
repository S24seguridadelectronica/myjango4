import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      Chat with us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
