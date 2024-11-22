import React, { useState, useEffect } from 'react';
import { FaAdjust, FaFont } from 'react-icons/fa'; // Import icons

function Accessible() {
  const [isHighContrast, setHighContrast] = useState(
    JSON.parse(localStorage.getItem('isHighContrast')) || false
  );
  const [isDyslexiaFriendly, setDyslexiaFriendly] = useState(
    JSON.parse(localStorage.getItem('isDyslexiaFriendly')) || false
  );

  useEffect(() => {
    document.body.classList.toggle('high-contrast', isHighContrast);
    document.body.classList.toggle('dyslexia-friendly', isDyslexiaFriendly);
  }, [isHighContrast, isDyslexiaFriendly]);

  const toggleHighContrast = () => {
    setHighContrast((prev) => {
      const newValue = !prev;
      localStorage.setItem('isHighContrast', JSON.stringify(newValue));
      return newValue;
    });
  };

  const toggleDyslexiaFriendly = () => {
    setDyslexiaFriendly((prev) => {
      const newValue = !prev;
      localStorage.setItem('isDyslexiaFriendly', JSON.stringify(newValue));
      return newValue;
    });
  };

  return (
    <div className="top-right-buttons">
      {/* High Contrast Button */}
      <button
        onClick={toggleHighContrast}
        className={`icon-button ${isHighContrast ? 'active' : ''}`}
        aria-label="Toggle High Contrast Mode"
      >
        <FaAdjust />
      </button>

      {/* Dyslexia-Friendly Button */}
      <button
        onClick={toggleDyslexiaFriendly}
        className={`icon-button ${isDyslexiaFriendly ? 'active' : ''}`}
        aria-label="Toggle Dyslexia-Friendly Mode"
      >
        <FaFont />
      </button>
    </div>
  );
}

export default Accessible;
