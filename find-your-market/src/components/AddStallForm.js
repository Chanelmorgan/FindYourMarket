// AddStallForm.js
import React, { useState } from 'react';

const AddStallForm = ({ onSubmit, onClose }) => {
  const [stallName, setStallName] = useState('');
  const [stallLocation, setStallLocation] = useState('');
  const [stallDescription, setStallDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stallName && stallLocation && stallDescription) {
      onSubmit(stallName, stallLocation, stallDescription);
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-stall-form">
      <div className="input-group">
        <label>Stall Name:</label>
        <input
          type="text"
          value={stallName}
          onChange={(e) => setStallName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Location:</label>
        <input
          type="text"
          value={stallLocation}
          onChange={(e) => setStallLocation(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Description:</label>
        <textarea
          value={stallDescription}
          onChange={(e) => setStallDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
      <button type="button" className="close-btn" onClick={onClose}>Close</button>
    </form>
  );
};

export default AddStallForm;