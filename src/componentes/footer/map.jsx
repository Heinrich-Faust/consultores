import React from 'react';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Ubicación en Google Maps"
        className="google-map"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.841163729072!2d-74.17018452596322!3d4.622411742333242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e86e6b068f1%3A0xbfd09e31b3dc802b!2sCra.%2080g%20Bis%20%2343-51%2C%20Bogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sus!4v1701253616749!5m2!1ses!2sus"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
