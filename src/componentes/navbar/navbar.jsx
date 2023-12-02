import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">P&G Consultores de Seguros</span>
        </Link>
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Inicio
        </Link>
        <Link to="/servicios" className="nav-link" onClick={toggleMenu}>
          Servicios
        </Link>
        <Link to="/nosotros" className="nav-link" onClick={toggleMenu}>
          Nosotros
        </Link>
        <Link to="/contacto" className="nav-link" onClick={toggleMenu}>
          Contacto
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
