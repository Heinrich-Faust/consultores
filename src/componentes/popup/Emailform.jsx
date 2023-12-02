import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './popup.css';


const EmailForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    celularOEmail: '',
    preferenciaContacto: 'llamada', 
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_2oo4qk2',
        'template_dp8i8xf',
        formData,
        '4SMBqpPBEv1MwG4qL'
      )
      .then((response) => {
        console.log('Correo enviado con éxito', response);
        setFormData({
          nombre: '',
          apellido: '',
          celularOEmail: '',
          preferenciaContacto: 'llamada',
          mensaje: '',
        });
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
      });
  };

  return (
     <div className="email-form-container">
      <h3>Escribenos Para Asesorarte</h3>
        <form className="email-form" onSubmit={handleSubmit}>
          <label className="label">
            Nombre:
            <input
              className="input"
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="label">
            Apellido:
            <input
              className="input"
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="label">
            Celular o Email:
            <input
              className="input"
              type="text"
              name="celularOEmail"
              value={formData.celularOEmail}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className="label">
            Preferencia Contacto:
            <select
              className="input"
              name="preferenciaContacto"
              value={formData.preferenciaContacto}
              onChange={handleChange}
            >
              <option value="llamada">Llamada</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
            </select>
          </label>
          <br />
          <label className="label2">
            Mensaje:
            <textarea
              className="textarea"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
            />
          </label>
          <br />
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
  );
};

export default EmailForm;
