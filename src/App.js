// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/navbar/navbar';
import Home from './componentes/Home/inicio';
import Servicios from './componentes/servicios/servicios';
import Nosotros from './componentes/about/about';
import Contacto from './componentes/contacto/contacto';
import Footer from './componentes/footer/footer';
import SocialButton from './socialbutton'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <SocialButton />
      </div>
    </Router>
  );
}

export default App;
