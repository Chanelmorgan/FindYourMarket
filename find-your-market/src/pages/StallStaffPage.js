// StallStaffPage.js
import React, { useState } from 'react';
import { FaPlus, FaEdit, FaSave } from 'react-icons/fa';
import AddStallForm from '../components/AddStallForm'; // Import the new form component
import AddItemForm from '../components/AddItemForm'; // Import the AddItemForm component
import '../styles/StallStaff.css';

const StallStaffPage = () => {
  const [stalls, setStalls] = useState([
    {
      id: 1,
      name: 'Stall 1',
      location: 'Downtown Market',
      description: 'Fresh fruits and vegetables.',
      items: [],
      isEditing: false,
    },
  ]);

  const [newStallId, setNewStallId] = useState(stalls.length + 1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isItemPopupOpen, setIsItemPopupOpen] = useState(false);
  const [currentStallId, setCurrentStallId] = useState(null);

  const handleAddStall = (name, location, description) => {
    setStalls([
      ...stalls,
      {
        id: newStallId,
        name,
        location,
        description,
        items: [],
        isEditing: false,
      },
    ]);
    setNewStallId(newStallId + 1);
  };

  const handleAddItem = (stallId, itemName, quantity, price) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? {
              ...stall,
              items: [
                ...stall.items,
                {
                  id: stall.items.length + 1,
                  name: itemName,
                  quantity,
                  price,
                },
              ],
            }
          : stall
      )
    );
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openItemPopup = (stallId) => {
    setCurrentStallId(stallId);
    setIsItemPopupOpen(true);
  };

  const closeItemPopup = () => {
    setIsItemPopupOpen(false);
    setCurrentStallId(null);
  };

  return (
    <div className="stall-page-container">
      <h1 className="stall-page-title">Your Stalls</h1>
      <button className="add-stall-btn" onClick={openPopup}>
        <FaPlus /> Add Stall
      </button>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Add Stall</h2>
            <AddStallForm onSubmit={handleAddStall} onClose={closePopup} />
          </div>
        </div>
      )}

      {isItemPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Add Item</h2>
            <AddItemForm
              stallId={currentStallId}
              onSubmit={handleAddItem}
              onClose={closeItemPopup}
            />
          </div>
        </div>
      )}

      <div className="stalls-container">
        {stalls.map((stall) => (
          <div key={stall.id} className="stall-card">
            <div className="stall-header">
              <h2>{stall.name}</h2>
              <FaEdit className="edit-icon" onClick={() => {}} />
            </div>
            <div className="stall-info">
              <p>
                <strong>Location:</strong> {stall.location}
              </p>
              <p>
                <strong>Description:</strong> {stall.description}
              </p>
            </div>

            <h3 className="item-title">Items</h3>
            <div className="items-list">
              {stall.items.map((item) => (
                <div key={item.id} className="item-row">
                  <div className="item-header">
                    <span className="item-name">{item.name}</span>
                    <FaEdit className="edit-icon" onClick={() => {}} />
                  </div>
                  <div className="item-quantity">Quantity: {item.quantity}</div>
                  <div className="item-price">Price: ${item.price}</div>
                </div>
              ))}
            </div>
            <button onClick={() => openItemPopup(stall.id)} className="add-item-btn">
              Add New Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StallStaffPage;