import React, { useState } from 'react';
import Popup from '../popup/popup';
import './productos.css';
import './styles.css';
import soluciones from './productos/soluciones.jpg';
import familiar from './productos/familiar.jpg';
import empresa from './productos/empresa.jpg';
import personal from './productos/personal.jpg';


const Productos = () => {
    const [showPopup, setShowPopup] = useState(false);
  
    const handleOpenPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };
  return (
    
    <div>
      {/* Primer componente */}
      <div className="fade-in-up">
      <div className="mi-componente">
        <img
          src={soluciones}
          alt="Descripción de la imagen"
          className="imagen"
        />
        <div className="contenido">
          <h1>Brindamos Soluciones</h1>
          <p>En <span class="texto-destacado">P&G CONSULTORES DE SEGUROS</span> contamos con excelentes herramientas y un increíble equipo que está listo para ayudarle con todas sus necesidades de seguros. Ofrecemos una amplia variedad de productos asequibles, como  seguro familiar, seguros empresariales y  seguros personales. Ahorre más, obtenga más. Con nuestros servicios puede tener la seguridad de que está en buenas manos.</p>
          <div className="pulso-container">
            <button className="pulso" onClick={handleOpenPopup}>
              <span role="img" aria-label="Icono de botón 1">
                📬
              </span>
            </button>
            <button className="pulso">
              <span role="img" aria-label="Icono de botón 2">
                📱
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Segundo componente */}
      <div className="fade-in-up">
      <div className="mi-componente1">
        <div className="contenido">
          <h1>Seguro Familiar</h1>
          <p>Es importante mantenerse protegido. Es por eso que <span class="texto-destacado">P&G CONSULTORES DE SEGUROS</span> le ofrece los mejores  seguros familiares , para garantizar que usted y su familia vivan tranquilos. Contacte a uno de nuestros asesores para saber más acerca de lo que hacemos, relájese y déjenos encargarnos de todo.</p>
          <div className="pulso-container">
            <button className="pulso" onClick={handleOpenPopup}>
              <span role="img" aria-label="Icono de botón 1">
                📬
              </span>
            </button>
            <button className="pulso">
              <span role="img" aria-label="Icono de botón 2">
                📱
              </span>
            </button>
          </div>
        </div>
        <img
          src={familiar}
          alt="Otra Descripción de la imagen"
          className="imagen"
        />
      </div>
      </div>  
        {/* Tercer componente */}
        <div className="fade-in-up">
            <div className="mi-componente">
        <img
          src={empresa}
          alt="Descripción de la imagen"
          className="imagen"
        />
        <div className="contenido">
          <h1>Seguros Empresariales</h1>
          <p>Su Patrimonio es lo primero. Nuestro compromiso es de proteger el patrimonio  de su empresa para facilitar  la continuidad de su negocio cuando  se presente una contingencia, ofrecemos una  póliza Multiriesgo de la mejor calidad adecuada a sus necesidades. Con años de experiencia, podemos comprender las necesidades de cada uno de nuestros clientes. Con <span class="texto-destacado">P&G CONSULTORES DE SEGUROS</span> de su lado, su proceso de aseguramiento será sencillo y fácil de entender.</p>
          <div className="pulso-container">
            <button className="pulso" onClick={handleOpenPopup}>
              <span role="img" aria-label="Icono de botón 1">
                📬
              </span>
            </button>
            <button className="pulso">
              <span role="img" aria-label="Icono de botón 2">
                📱
              </span>
            </button>
          </div>
        </div>
      </div>
      </div>
      {/* Cuarto componente */}
      <div className="fade-in-up">
      <div className="mi-componente1">
        <div className="contenido">
          <h1>Seguro Personal</h1>
          <p>En <span class="texto-destacado">P&G CONSULTORES DE SEGUROS</span> hemos ayudado a las personas a sentirse más seguras mediante seguros personales. ¿Pasa usted demasiado tiempo pensando en lo que podría suceder en el futuro? ¡No se preocupe! Estamos aquí para proporcionarle la póliza que mejor se adapte a sus necesidades específicas.</p>
          <div className="pulso-container" onClick={handleOpenPopup}>
            <button className="pulso">
              <span role="img" aria-label="Icono de botón 1">
                📬
              </span>
            </button>
            <button className="pulso">
              <span role="img" aria-label="Icono de botón 2">
                📱
              </span>
            </button>
          </div>
        </div>
        <img
          src={personal}
          alt="Otra Descripción de la imagen"
          className="imagen"
        />
      </div>
    </div>
    </div>
    {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Productos;
