import React from 'react';
import './infocard.css';
import logo from './logo.png';

const InfoCard = () => {
    return (
        <div className="fade-in-up">
      <div className="info-card">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="text-container">
          <h1>P&G CONSULTORES DE SEGUROS</h1>
          <p>Tenemos lo mejor en seguros. Personalizar su seguro es fácil con <span class="texto-destacado">P&G CONSULTORES DE SEGUROS.</span> Nuestros asesores son especialistas en ofrecer pólizas que se adapten a sus necesidades específicas. Le ofrecemos nuestros servicios a los colombianos desde 2016. Suscríbase hoy y reciba la protección de las mejores compañías de seguro.</p>
        </div>
      </div>
      </div>
    );
  };

export default InfoCard;
