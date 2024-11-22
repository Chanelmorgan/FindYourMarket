import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/StallStaff.css';
import { FaPlus } from 'react-icons/fa';
import Popup from '../components/Popup'; // Import the Popup component

const StallStaffPage = () => {
  const [stalls, setStalls] = useState([
    {
      id: 1,
      name: 'Stall 1',
      location: 'Downtown Market',
      description: 'Fresh fruits and vegetables.',
      items: [
        { name: 'Apples', quantity: 50 },
        { name: 'Carrots', quantity: 30 },
        { name: 'Bananas', quantity: 20 },
      ],
    },
  ]);

  const marketLocations = [
    { value: 'Downtown Market', label: 'Downtown Market' },
    { value: 'City Square Market', label: 'City Square Market' },
    { value: 'Harbor Market', label: 'Harbor Market' },
  ];

  const [newStallId, setNewStallId] = useState(stalls.length + 1);
  const [showPopup, setShowPopup] = useState(false);
  const [stallName, setStallName] = useState('');
  const [stallLocation, setStallLocation] = useState('');
  const [stallDescription, setStallDescription] = useState('');

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setStallName('');
    setStallLocation('');
    setStallDescription('');
  };

  const handleAddStall = () => {
    if (stallName && stallLocation && stallDescription) {
      setStalls([
        ...stalls,
        {
          id: newStallId,
          name: stallName,
          location: stallLocation,
          description: stallDescription,
          items: [],
        },
      ]);
      setNewStallId(newStallId + 1);

      // Close popup and reset fields
      closePopup();
      alert('Stall added successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="stall-page-container">
      <h1 className="stall-page-title">Stall Management</h1>
      <button className="add-stall-btn" onClick={openPopup}>
        <FaPlus /> Add Stall
      </button>

      {/* Popup Modal for Adding Stall */}
      <Popup
        show={showPopup}
        onClose={closePopup}
        title="Add New Stall"
        buttonText="Add Stall"
        onConfirm={handleAddStall}
        isError={false}
      >
        {/* The form to add a new stall */}
        <div className="input-group">
          <label htmlFor="stall-name">Stall Name</label>
          <input
            type="text"
            id="stall-name"
            placeholder="Enter stall name"
            value={stallName}
            onChange={(e) => setStallName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="stall-location">Market Location</label>
          <Select
            id="stall-location"
            options={marketLocations}
            value={marketLocations.find((loc) => loc.value === stallLocation)}
            onChange={(option) => setStallLocation(option.value)}
            placeholder="Select location"
            isSearchable={true}
          />
        </div>
        <div className="input-group">
          <label htmlFor="stall-description">Stall Description</label>
          <textarea
            id="stall-description"
            value={stallDescription}
            onChange={(e) => setStallDescription(e.target.value)}
            placeholder="Enter stall description"
          />
        </div>
      </Popup>

      <div className="stalls-container">
        {stalls.map((stall) => (
          <div key={stall.id} className="stall-card">
            <h2>{stall.name}</h2>
            <div className="input-group">
              <label>Market Location:</label>
              <Select
                options={marketLocations}
                value={marketLocations.find((loc) => loc.value === stall.location)}
                onChange={(location) => setStalls(stalls.map(stall => stall.id === stall.id ? {...stall, location: location.value} : stall))}
                placeholder="Select Location"
                isSearchable={true}
              />
            </div>
            <div className="input-group">
              <label>Description:</label>
              <textarea
                value={stall.description}
                onChange={(e) => setStalls(stalls.map(stall => stall.id === stall.id ? {...stall, description: e.target.value} : stall))}
                placeholder="Enter stall description"
              />
            </div>
            <h3 className="item-title">Items</h3>
            <div className="items-list">
              {stall.items.map((item, index) => (
                <div key={index} className="item-row">
                  <span className="item-name">{item.name}</span>
                  <input
                    type="number"
                    value={item.quantity}
                    min="0"
                    onChange={(e) =>
                      setStalls(stalls.map(stall => stall.id === stall.id ? {
                        ...stall,
                        items: stall.items.map((item, idx) => idx === index ? {...item, quantity: Number(e.target.value)} : item),
                      } : stall))
                    }
                  />
                </div>
              ))}
            </div>
            <div className="add-item">
              <input
                type="text"
                placeholder="Item name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim() !== '') {
                    // add item logic here
                    e.target.value = '';
                  }
                }}
              />
              <button>
                Add Item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StallStaffPage;