
import React from 'react';
import '../styles/Popup.css';

const Popup = ({
  show,
  onClose,
  title = 'Popup Title',
  message = 'This is a sample message.',
  buttonText = 'Close',
  onConfirm,
  isError = false, 
}) => {
  if (!show) return null;


  const popupClass = isError ? 'popup-content error' : 'popup-content';

  return (
    <div className="popup-overlay">
      <div className={popupClass}>
        <button className="close-button-pop-up" onClick={onClose}>&times;</button>
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="popup-button" onClick={onConfirm}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;