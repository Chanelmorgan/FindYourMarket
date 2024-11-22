import React, { useState, useEffect } from 'react';

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
      return(
        <div className="top-right-buttons">
          <button onClick={toggleHighContrast}>
            {isHighContrast ? 'Disable High Contrast Mode' : 'Enable High Contrast Mode'}
          </button>
          <button onClick={toggleDyslexiaFriendly}>
            {isDyslexiaFriendly ? 'Disable Dyslexia-Friendly Mode' : 'Enable Dyslexia-Friendly Mode'}
          </button>
        </div>
      );
 };

export default Accessible;