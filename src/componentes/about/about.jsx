import React from 'react';
import './about.css';
import logo from './logo.png';
import logo1 from './logo2.jpg';

const About = () => {
  return (
    <div>
      {/* Primera tarjeta */}
      <div className="info-card3">
        <div className="logo-container3">
          <div className="logo3">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="text-container3">
          <h1>MISIÓN</h1>
          <p>
            En <span className="texto-destacado">P&G CONSULTORES DE SEGUROS.</span> nos enorgullece ofrecer lo mejor en seguros con un toque personalizado. Nuestros dedicados asesores son expertos en diseñar pólizas que se ajustan a sus necesidades específicas, brindándole la tranquilidad que se merece. Desde 2016, hemos estado comprometidos en proporcionar servicios confiables a la comunidad colombiana. En <span className="texto-destacado">P&G,</span> no solo vendemos seguros, construimos relaciones. Nos esforzamos por entender sus preocupaciones y aspiraciones, tratándolo no solo como un cliente, sino como parte de nuestra familia aseguradora. Al suscribirse a nuestros servicios, no solo obtendrá la protección de las mejores compañías de seguro, sino también la certeza de que estamos aquí para apoyarlo en cada paso del camino. Únase a nosotros hoy y experimente la combinación perfecta de seriedad y familiaridad en el mundo de los seguros. En <span className="texto-destacado">P&G,</span> su bienestar es nuestra prioridad.
          </p>
        </div>
      </div>

      {/* Segunda tarjeta */}
      <div className="info-card1">
        <div className="text-container1">
          <h4>VISIÓN</h4>
          <p>
            En <span className="texto-destacado1">P&G CONSULTORES DE SEGUROS.</span> visualizamos un futuro donde cada colombiano tenga acceso a una protección financiera sólida y personalizada. Nos esforzamos por ser la agencia de seguros líder, reconocida por nuestra integridad, confiabilidad y compromiso con la excelencia. En <span className="texto-destacado1">P&G,</span> aspiramos a cultivar relaciones a largo plazo con nuestros asegurados, basadas en la confianza y la transparencia. Nuestra visión se centra en crear un entorno donde la seguridad financiera sea accesible para todos, respaldada por la fortaleza y solidez de las mejores compañías de seguro. Con un compromiso inquebrantable con la excelencia y la satisfacción del cliente, avanzamos hacia el futuro, forjando un camino donde cada colombiano pueda confiar en <span className="texto-destacado1">P&G CONSULTORES DE SEGUROS</span> para proteger lo que más valora."
          </p>
        </div>
        <div className="logo-container1">
          <div className="logo1">
            <img src={logo1} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
