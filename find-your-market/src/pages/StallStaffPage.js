import React, { useState } from 'react';
import Select from 'react-select';
import { FaPlus, FaEdit, FaSave } from 'react-icons/fa';
import '../styles/StallStaff.css';
import AddPopup from "../components/AddPopup";

const StallStaffPage = () => {
  const [stalls, setStalls] = useState([
    {
      id: 1,
      name: 'Stall 1',
      location: 'Downtown Market',
      description: 'Fresh fruits and vegetables.',
      items: [
        { id: 1, name: 'Apples', quantity: 50 },
        { id: 2, name: 'Carrots', quantity: 30 },
        { id: 3, name: 'Bananas', quantity: 20 },
      ],
      isEditing: false,
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
  const [error, setError] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    itemName: "",
    quantity: "",
    price: "",
  });

  const inputFields = [
    { name: "itemName", label: "Item Name", type: "text", required: true },
    { name: "quantity", label: "Quantity", type: "number", required: true },
    { name: "price", label: "Price", type: "number", required: true },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setIsPopupOpen(false);
  };

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
          isEditing: false,
        },
      ]);
      setNewStallId(newStallId + 1);
      closePopup();
      alert('Stall added successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleEditStall = (stallId) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId ? { ...stall, isEditing: !stall.isEditing } : stall
      )
    );
  };

  const handleSaveStall = (stallId, newName, newLocation, newDescription) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? { ...stall, name: newName, location: newLocation, description: newDescription, isEditing: false }
          : stall
      )
    );
  };

  const handleEditItem = (stallId, itemId) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? {
              ...stall,
              items: stall.items.map((item) =>
                item.id === itemId ? { ...item, isEditing: true } : item
              ),
            }
          : stall
      )
    );
  };

  const handleSaveItem = (stallId, itemId, newName, newQuantity) => {
    if (newQuantity <= 0) {
      setError('Quantity must be greater than 0.');
      return;
    }
    setError('');
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? {
              ...stall,
              items: stall.items.map((item) =>
                item.id === itemId ? { ...item, name: newName, quantity: newQuantity, isEditing: false } : item
              ),
            }
          : stall
      )
    );
  };

  const handleChangeItem = (stallId, itemId, key, value) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? {
              ...stall,
              items: stall.items.map((item) =>
                item.id === itemId ? { ...item, [key]: value } : item
              ),
            }
          : stall
      )
    );
  };

  const handleAddItem = (stallId) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? {
              ...stall,
              items: [
                ...stall.items,
                {
                  id: stall.items.length + 1,
                  name: 'New Item',
                  quantity: 0,
                  isEditing: false,
                },
              ],
            }
          : stall
      )
    );
  };

  return (
    <div className="stall-page-container">
      <h1 className="stall-page-title">Your Stalls</h1>
      <button className="add-stall-btn" onClick={() => setIsPopupOpen(true)}>
        <FaPlus /> Add Stall
      </button>

      <AddPopup
        isOpen={isPopupOpen}
        title="Add Item"
        inputFields={inputFields}
        formData={formData}
        onInputChange={handleInputChange}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleSubmit}
      />

      <div className="stalls-container">
        {stalls.map((stall) => (
          <div key={stall.id} className="stall-card">
            <div className="stall-header">
              <h2>{stall.name}</h2>
              <FaEdit className="edit-icon" onClick={() => handleEditStall(stall.id)} />
            </div>
            <div className="stall-info">
              {stall.isEditing ? (
                <>
                  <div className="input-group">
                    <label>Market Location:</label>
                    <Select
                      options={marketLocations}
                      value={marketLocations.find((loc) => loc.value === stall.location)}
                      onChange={(location) =>
                        setStalls(
                          stalls.map((s) =>
                            s.id === stall.id ? { ...s, location: location.value } : s
                          )
                        )
                      }
                      placeholder="Select Location"
                      isSearchable={true}
                    />
                  </div>
                  <div className="input-group">
                    <label>Description:</label>
                    <textarea
                      value={stall.description}
                      onChange={(e) =>
                        setStalls(
                          stalls.map((s) =>
                            s.id === stall.id ? { ...s, description: e.target.value } : s
                          )
                        )
                      }
                      placeholder="Enter stall description"
                    />
                  </div>
                  <button onClick={() => handleSaveStall(stall.id, stall.name, stall.location, stall.description)}>
                    <FaSave /> Save
                  </button>
                </>
              ) : (
                <>
                  <p>
                    <strong>Location:</strong> {stall.location}
                  </p>
                  <p>
                    <strong>Description:</strong> {stall.description}
                  </p>
                </>
              )}
            </div>

            <h3 className="item-title">Items</h3>
            <div
              className="items-list"
              style={{
                maxHeight: stall.items.length >= 5 ? '200px' : 'auto',
                overflowY: 'auto',
              }}
            >
              {stall.items.map((item) => (
                <div key={item.id} className="item-row">
                  <div className="item-header">
                    <span className="item-name">{item.name}</span>
                    <FaEdit className="edit-icon" onClick={() => handleEditItem(stall.id, item.id)} />
                  </div>
                  {item.isEditing ? (
                    <div className="item-edit">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) =>
                          handleChangeItem(stall.id, item.id, 'name', e.target.value)
                        }
                      />
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleChangeItem(stall.id, item.id, 'quantity', e.target.value)
                        }
                      />
                      <button
                        onClick={() =>
                          handleSaveItem(stall.id, item.id, item.name, item.quantity)
                        }
                      >
                        <FaSave />
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <span className="item-quantity">Quantity: {item.quantity}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button onClick={() => handleAddItem(stall.id)} className="add-item-btn">
              Add New Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StallStaffPage;