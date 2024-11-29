
import React, { useState } from 'react';
import '../styles/StaffStallForm.css';

const AddItemForm = ({ stallId, onSubmit, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && quantity > 0 && price > 0) {
      onSubmit(stallId, itemName, quantity, price);
      onClose();
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <div className="input-group">
        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-btn">Add Item</button>
      <button type="button" className="close-btn" onClick={onClose}>Close</button>
    </form>
  );
};

export default AddItemForm;