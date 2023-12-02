import React, { useEffect } from 'react';
import './styles.css';
import Carrusel from './carrusel';
import InfoCard from './infocard';
import Asociados from './asociados';
import Productos from './productos';
import Testimonial from './testimonial';
import Correo from './email';

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');

    const handleScroll = () => {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Carrusel />
      <InfoCard className="fade-in-up" />
      <Asociados className="fade-in-up" />
      <Productos className="fade-in-up" />
      <Testimonial className="fade-in-up" />
      <Correo className="fade-in-up" />
    </div>
  );
}

export default App;
