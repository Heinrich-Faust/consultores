import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'; 
import imagen1 from './testimonial-1.jpg';
import imagen2 from './testimonial-2.jpg';
import imagen3 from './testimonial-3.jpg';
import imagen4 from './testimonial-4.jpg';
import imagen5 from './testimonial-5.jpg';

const testimonios = [
  {
    id: 1,
    imagenSrc: imagen1,
    mensaje: '"Mi experiencia ha sido excepcional. El equipo de atención al cliente siempre está dispuesto a ayudar, brindando respuestas rápidas y soluciones efectivas. Me siento respaldada y segura al saber que cuentan con un servicio tan eficiente."',
    nombre: '"Camila Nkosi"',
  },
  {
    id: 2,
    imagenSrc: imagen2,
    mensaje: '"Lo que más me impresiona es la variedad de opciones de aseguradoras y coberturas que ofrecen. Pude personalizar mi póliza según mis necesidades específicas sin sentir que estaba pagando de más. ¡Definitivamente recomendaría sus servicios a cualquiera buscando flexibilidad y opciones asequibles!"',
    nombre: '"Don Eliseo Mendoza"',
  },
  {
    id: 3,
    imagenSrc: imagen3,
    mensaje: '"La transparencia es clave cuando se trata de seguros, y ellos lo comprenden perfectamente. Me guiaron a través de cada detalle de mi póliza, explicando de manera clara y concisa los términos y condiciones. Esta honestidad y claridad son invaluables y me generan confianza en su profesionalismo."',
    nombre: '"Javier Rendon"',
  },
  {
    id: 4,
    imagenSrc: imagen4,
    mensaje: '"Tuve la necesidad de presentar una reclamación recientemente, y el equipo manejó el proceso de manera rápida y eficiente. La respuesta fue oportuna, y se aseguraron de que todo estuviera resuelto de manera satisfactoria. Su eficiencia en este aspecto demuestra su compromiso con la satisfacción del cliente."',
    nombre: '"Doña Dolores Gutiérrez"',
  },
  {
    id: 5,
    imagenSrc: imagen5,
    mensaje: '"Lo que realmente los destaca es su enfoque personalizado. Me asignaron un asesor que se tomó el tiempo necesario para comprender mis necesidades y ofrecerme opciones adaptadas a mi situación. Este nivel de atención individualizada marca la diferencia y me hace sentir que estoy en buenas manos."',
    nombre: '"Valeria "Vale" Ramírez"',
  },
];

const TestimonialCard = ({ testimonio }) => {
  return (
    <div className="testimonial-card">
      <img src={testimonio.imagenSrc} alt={testimonio.nombre} className="testimonial-image" />
      <p className="testimonial-text">{testimonio.mensaje}</p>
      <p className="testimonial-name">{testimonio.nombre}</p>
    </div>
  );
};

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    appendDots: dots => (
      <div>
        <div>{dots}</div>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} className="slick-prev-icon" />
          <FontAwesomeIcon icon={faChevronRight} className="slick-next-icon" />
        </div>
      </div>
    ),
  };

  return (
    <div className="fade-in-up">
    <Slider {...settings} className="testimonial-slider">
      {testimonios.map(testimonio => (
        <TestimonialCard key={testimonio.id} testimonio={testimonio} />
      ))}
    </Slider>
    </div>
  );
};

export default TestimonialCarousel;
