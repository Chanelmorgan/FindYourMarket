import React from 'react';
import '../styles/Popup.css';

const Popup = ({ show, onClose, title = 'Popup Title', message = 'This is a sample message.', buttonText = 'Close', onConfirm }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onConfirm}>{buttonText}</button>   
      </div>
    </div>
  );
};

export default Popup;