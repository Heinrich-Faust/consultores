import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Popup from '../popup/popup'; // Asegúrate de importar el componente Popup
import './servicios.css';
import imagen0 from './servicios/atencion.jpg';
import imagen1 from './servicios/Autos.jpg';
import imagen2 from './servicios/fumigacion.jpg';
import imagen3 from './servicios/home.jpg';
import imagen4 from './servicios/cumplimiento.jpg';
import imagen5 from './servicios/pyme.jpg';

const ImageGallery = () => {
  const [showCaption, setShowCaption] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const images = [
    { src: imagen0, title: 'ASESORIA INTEGRAL 24/7', caption: '"¡Protección sin límites, asesoría completa las 24 horas, los 7 días de la semana! No solo te ayudamos a elegir la póliza ideal, sino que también estamos aquí para respaldarte en cada paso del camino. Tu seguridad es nuestra prioridad, siempre."' },
    { src: imagen1, title: 'SEGUROS AUTOMOVILES', caption: '"Protegemos tu viaje y tu tranquilidad, encontrando la póliza perfecta que se adapta a tus necesidades personales. ¡Con nosotros, tu seguridad al volante está garantizada!"' },
    { src: imagen2, title: 'SEGUROS FUMIGACION', caption: '"Nuestros seguros de fumigación garantizan tranquilidad y seguridad ante cualquier eventualidad. Resguarda la responsabilidad civil y protege el patrimonio de tu empresa."' },
    { src: imagen3, title: 'SEGUROS HOGAR', caption: '"Tu hogar es único, por eso ofrecemos coberturas a medida para proteger lo que más valoras. Con nuestros seguros de hogar, tendrás la tranquilidad de contar con una protección personalizada que se adapta a tus necesidades específicas."' },
    { src: imagen4, title: 'SEGUROS CUMPLIENTO', caption: '"Nuestra eficacia en la emisión de seguros de cumplimiento garantiza una protección rápida y confiable para tu negocio. Confía en nosotros para asegurar tu cumplimiento sin demoras ni complicaciones."' },
    { src: imagen5, title: 'SEGUROS PYMES', caption: '"Entendemos el valor de cada sacrificio en tu negocio. Con nuestros seguros PYMES, protegemos tu esfuerzo con soluciones a medida, para que puedas seguir creciendo con tranquilidad y confianza en el futuro."' },
  ];

  const handleMouseEnter = (title) => {
    setShowCaption(true);
    setCurrentTitle(title || '');
  };

  const handleMouseLeave = () => {
    setShowCaption(false);
  };

  const handleContainerClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div
          key={index}
          className="image-container"
          onMouseEnter={() => handleMouseEnter(image.title)}
          onMouseLeave={handleMouseLeave}
          onClick={handleContainerClick}
        >
          <CSSTransition
            in={currentTitle === image.title}
            timeout={500}
            classNames="slide"
          >
            <img src={image.src} alt={`Imagen ${index + 1}`} />
          </CSSTransition>
          <div className={`caption ${currentTitle === image.title ? 'active' : ''}`}>
            <h3>{image.title}</h3>
            <p>{image.caption}</p>
          </div>
        </div>
      ))}
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default ImageGallery;
