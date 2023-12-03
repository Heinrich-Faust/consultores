// SocialButton.js
import React from 'react';
import whats from './whatsapp.png';
import insta from './instagram.png';


const SocialButton = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'URL_DE_WHATSAPP'; // Reemplaza con la URL de WhatsApp
  };

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/pyg_consultores_de_seguros/'; // Reemplaza con la URL de Instagram
  };

  return (
    <div className="social-button-container">
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img src= {whats} alt="WhatsApp" />
      </button>
      <button className="instagram-button" onClick={handleInstagramClick}>
        <img src={insta} alt="Instagram" />
      </button>
    </div>
  );
};

export default SocialButton;
