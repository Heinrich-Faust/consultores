import React from 'react';
import EmailForm from './Emailform';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <EmailForm onClose={onClose} />
      </div>
    </div>
  );
};

export default Popup;
