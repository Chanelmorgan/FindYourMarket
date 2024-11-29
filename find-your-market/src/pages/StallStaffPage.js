import React, { useState } from 'react';
import { FaPlus, FaEdit, FaSave } from 'react-icons/fa';
import AddStallForm from '../components/AddStallForm'; 
import AddItemForm from '../components/AddItemForm'; 
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
  const [currentItemId, setCurrentItemId] = useState(null);

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

  const handleEditStall = (stallId) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? { ...stall, isEditing: !stall.isEditing }
          : stall
      )
    );
  };

  const handleSaveStall = (stallId, name, location, description) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? { ...stall, name, location, description, isEditing: false }
          : stall
      )
    );
  };

  const handleEditItem = (stallId, itemId) => {
    setCurrentStallId(stallId);
    setCurrentItemId(itemId);
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

  const handleSaveItem = (stallId, itemId, name, quantity, price) => {
    setStalls(
      stalls.map((stall) =>
        stall.id === stallId
          ? {
              ...stall,
              items: stall.items.map((item) =>
                item.id === itemId
                  ? { ...item, name, quantity, price, isEditing: false }
                  : item
              ),
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
    setCurrentItemId(null);
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
              {stall.isEditing ? (
                <>
                  <input
                    type="text"
                    value={stall.name}
                    onChange={(e) =>
                      setStalls(
                        stalls.map((s) =>
                          s.id === stall.id
                            ? { ...s, name: e.target.value }
                            : s
                        )
                      )
                    }
                  />
                  <FaSave
                    onClick={() =>
                      handleSaveStall(stall.id, stall.name, stall.location, stall.description)
                    }
                  />
                </>
              ) : (
                <>
                  <h2>{stall.name}</h2>
                  <FaEdit className="edit-icon" onClick={() => handleEditStall(stall.id)} />
                </>
              )}
            </div>
            <div className="stall-info">
              {stall.isEditing ? (
                <>
                  <input
                    type="text"
                    value={stall.location}
                    onChange={(e) =>
                      setStalls(
                        stalls.map((s) =>
                          s.id === stall.id
                            ? { ...s, location: e.target.value }
                            : s
                        )
                      )
                    }
                  />
                  <textarea
                    value={stall.description}
                    onChange={(e) =>
                      setStalls(
                        stalls.map((s) =>
                          s.id === stall.id
                            ? { ...s, description: e.target.value }
                            : s
                        )
                      )
                    }
                  />
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
            <div className="items-list">
              {stall.items.map((item) => (
                <div key={item.id} className="item-row">
                  <div className="item-header">
                    {item.isEditing ? (
                      <>
                        <input
                          type="text"
                          value={item.name}
                          onChange={(e) =>
                            setStalls(
                              stalls.map((s) =>
                                s.id === stall.id
                                  ? {
                                      ...s,
                                      items: s.items.map((i) =>
                                        i.id === item.id
                                          ? { ...i, name: e.target.value }
                                          : i
                                      ),
                                    }
                                  : s
                              )
                            )
                          }
                        />
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            setStalls(
                              stalls.map((s) =>
                                s.id === stall.id
                                  ? {
                                      ...s,
                                      items: s.items.map((i) =>
                                        i.id === item.id
                                          ? { ...i, quantity: e.target.value }
                                          : i
                                      ),
                                    }
                                  : s
                              )
                            )
                          }
                        />
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) =>
                            setStalls(
                              stalls.map((s) =>
                                s.id === stall.id
                                  ? {
                                      ...s,
                                      items: s.items.map((i) =>
                                        i.id === item.id
                                          ? { ...i, price: e.target.value }
                                          : i
                                      ),
                                    }
                                  : s
                              )
                            )
                          }
                        />
                        <FaSave
                          onClick={() =>
                            handleSaveItem(
                              stall.id,
                              item.id,
                              item.name,
                              item.quantity,
                              item.price
                            )
                          }
                        />
                      </>
                    ) : (
                      <>
                                              <span className="item-name">{item.name}</span>
                        <FaEdit
                          className="edit-icon"
                          onClick={() => handleEditItem(stall.id, item.id)}
                        />
                      </>
                    )}
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