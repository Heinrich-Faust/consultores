import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './asociados.css';
import logo1 from './logos/logo1.jpg';
import logo2 from './logos/logo2.jpg';
import logo3 from './logos/logo3.jpeg';
import logo4 from './logos/logo4.jpg';
import logo5 from './logos/logo5.jpg';
import logo6 from './logos/logo6.jpeg';
import logo7 from './logos/logo7.jpeg';
import logo8 from './logos/logo8.jpg';
import logo9 from './logos/logo9.jpeg';
import logo10 from './logos/logo10.jpg';
import logo11 from './logos/logo11.png';
import logo12 from './logos/logo12.png';
import logo13 from './logos/logo13.jpg';
import logo14 from './logos/logo14.jpg';
import logo15 from './logos/logo15.jpg';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false ,
    autoplaySpeed: 400,
  };

  return (
    <div className="fade-in-up">
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Aseguradoras Aliadas</h2>
      </div>
    <Slider {...settings}>
      <div className="asociados-item">
        <img src={logo1} alt="Imagen 1" className="asociados-image" />
      </div>
      <div className="asociados-item">
        <img src={logo2} alt="Imagen 2" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo3} alt="Imagen 3" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo4} alt="Imagen 4" className="asociados-image" />
        </div>
        <div className="asociados-item">
        <img src={logo5} alt="Imagen 5" className="asociados-image" />
      </div>
      <div className="asociados-item">
        <img src={logo6} alt="Imagen 6" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo7} alt="Imagen 7" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo8} alt="Imagen 8" className="asociados-image" />
        </div>
        <div className="asociados-item">
        <img src={logo9} alt="Imagen 9" className="asociados-image" />
      </div>
      <div className="asociados-item">
        <img src={logo10} alt="Imagen 10" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo11} alt="Imagen 11" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo12} alt="Imagen 12" className="asociados-image" />
        </div>
        <div className="asociados-item">
        <img src={logo13} alt="Imagen 13" className="asociados-image" />
      </div>
      <div className="asociados-item">
        <img src={logo14} alt="Imagen 14" className="asociados-image" />
        </div>
      <div className="asociados-item">
        <img src={logo15} alt="Imagen 15" className="asociados-image" />
        </div>
    </Slider>
    </div>
    </div>
  );
};

export default Carousel;
