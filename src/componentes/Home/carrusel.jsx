import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carrusel.css';
import imagen1 from './seguroempresarial.jpg';
import imagen2 from './segurovida.jpg';
import imagen3 from './seguroempresas.jpg';
import imagen4 from './segurohogar.jpg';


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <img src={imagen1} alt="Imagen 1" className="carousel-image" />
        <div className="overlay">
        <h1 className="custom-heading">"Transforma cada viaje en una experiencia sin preocupaciones. Nuestro seguro vehicular te acompaña en la carretera, brindándote protección y tranquilidad."</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img src={imagen2} alt="Imagen 2" className="carousel-image" />
        <div className="overlay">
        <h1 className="custom-heading">"Vive cada momento con la certeza de que tu legado está protegido. Nuestro seguro de vida es tu garantía de seguridad para ti y tus seres queridos."</h1>
        </div>
      </div>
      <div className="carousel-item">
        <img src={imagen3} alt="Imagen 3" className="carousel-image" />
        <div className="overlay">
        <h1 className="custom-heading">"Impulsa tu negocio con confianza. Nuestro seguro empresarial te respalda en cada paso, protegiendo lo que has construido con tanto esfuerzo."</h1>
        </div>
        </div>
      <div className="carousel-item">
        <img src={imagen4} alt="Imagen 4" className="carousel-image" />
        <div className="overlay">
        <h1 className="custom-heading">"Haz de tu hogar un refugio seguro. Nuestro seguro de hogar garantiza protección integral para tu paz y la de tu familia."</h1>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
