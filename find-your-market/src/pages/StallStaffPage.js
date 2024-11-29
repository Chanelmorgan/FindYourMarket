import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/StallStaff.css';
import { FaPlus } from 'react-icons/fa';

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

  const [showAddForm, setShowAddForm] = useState(false);
  const [stallName, setStallName] = useState('');
  const [stallLocation, setStallLocation] = useState('');
  const [stallDescription, setStallDescription] = useState('');

  const handleAddStall = () => {
    if (!stallName || !stallLocation || !stallDescription) {
      alert('Please fill out all fields.');
      return;
    }
    const newStall = {
      id: stalls.length + 1,
      name: stallName,
      location: stallLocation,
      description: stallDescription,
      items: [],
    };
    setStalls([...stalls, newStall]);
    setStallName('');
    setStallLocation('');
    setStallDescription('');
    setShowAddForm(false);
  };

  const handleItemQuantityChange = (stallId, itemIndex, quantity) => {
    setStalls(stalls.map(stall => 
      stall.id === stallId
        ? {
            ...stall,
            items: stall.items.map((item, index) =>
              index === itemIndex ? { ...item, quantity } : item
            ),
          }
        : stall
    ));
  };

  const handleAddItem = (stallId, itemName) => {
    if (itemName.trim() !== '') {
      setStalls(stalls.map(stall => 
        stall.id === stallId
          ? {
              ...stall,
              items: [...stall.items, { name: itemName, quantity: 0 }],
            }
          : stall
      ));
    }
  };

  return (
    <div className="stall-page-container">
      <h1 className="stall-page-title">Your Stalls</h1>

      <button className="add-stall-btn" onClick={() => setShowAddForm(!showAddForm)}>
        <FaPlus /> Add Stall
      </button>

      {/* Inline form for adding a stall */}
      {showAddForm && (
        <div className="add-stall-form">
          <h2>Add New Stall</h2>
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
          <button onClick={handleAddStall}>Save Stall</button>
        </div>
      )}

      <div className="stalls-container">
        {stalls.map((stall) => (
          <div key={stall.id} className="stall-card">
            <h2>{stall.name}</h2>

            {/* Editable fields for each stall */}
            <div className="input-group">
              <label>Market Location:</label>
              <Select
                options={marketLocations}
                value={marketLocations.find((loc) => loc.value === stall.location)}
                onChange={(location) => setStalls(stalls.map(s => s.id === stall.id ? { ...s, location: location.value } : s))}
                placeholder="Select Location"
                isSearchable={true}
              />
            </div>
            <div className="input-group">
              <label>Description:</label>
              <textarea
                value={stall.description}
                onChange={(e) => setStalls(stalls.map(s => s.id === stall.id ? { ...s, description: e.target.value } : s))}
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
                      handleItemQuantityChange(stall.id, index, Number(e.target.value))
                    }
                  />
                </div>
              ))}
            </div>

            {/* Add item form */}
            <div className="add-item">
              <input
                type="text"
                placeholder="Item name"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim() !== '') {
                    handleAddItem(stall.id, e.target.value.trim());
                    e.target.value = ''; // Clear the input field
                  }
                }}
              />
              <button
                onClick={(e) => {
                  const itemName = e.target.previousElementSibling.value;
                  if (itemName.trim() !== '') {
                    handleAddItem(stall.id, itemName);
                    e.target.previousElementSibling.value = ''; // Clear input
                  }
                }}
              >
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