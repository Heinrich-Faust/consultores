import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import Map from './map';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns-container">
        <div className="footer-column">
          <h2>Contacto</h2>
          <p>Email: d.comercialpygconsultoreseg@gmail.com</p>
          <p>Dirección: Cra 80 g-bis No. 43 51 sur</p>
          <p>WhatsApp: +57 320 2841145</p>
          <p>Instagram: @pyg_consultores_de_seguros</p>
        </div>

        <div className="footer-column">
          <h2>Ubicación</h2>
          <Map />
        </div>

        <div className="footer-column">
          <h2>Accesos Rápidos</h2>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>
      </div>

      <p className="copyright">© 2023 P&G Consultores de seguros. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
