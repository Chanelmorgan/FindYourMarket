import React, { useState } from "react";
import { FaEdit, FaSave, FaPlus } from "react-icons/fa";
import "../styles/AccountDetails.css";

const AccountDetailsPage = () => {
  const [user, setUser] = useState({
    firstName: "Chanel",
    lastName: "Morgan",
    email: "chanel.morgan@uea.ac.uk",
    phone: "+1234567890",
    addressLine1: "123 Norwich Road",
    addressLine2: "Apt 4B",
    postcode: "12345",
    password: "password123",
    accountType: "Staff", 
    locationPreference: "Nearby", 
    visitPreference: "Daily",  
    stalls: [
      {
        id: 1,
        stallName: "Fresh Produce",
        marketName: "Green Market",
        location: "Norwich",
      },
      {
        id: 2,
        stallName: "Organic Veg",
        marketName: "Farmers Market",
        location: "London",
      },
    ], 
  });

  const [editingField, setEditingField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleStallInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStalls = [...user.stalls];
    updatedStalls[index][name] = value;
    setUser((prevUser) => ({
      ...prevUser,
      stalls: updatedStalls,
    }));
  };

  const addStall = () => {
    const newStall = {
      id: user.stalls.length + 1,
      stallName: "",
      marketName: "",
      location: "",
    };
    setUser((prevUser) => ({
      ...prevUser,
      stalls: [...prevUser.stalls, newStall],
    }));
  };

  const toggleEditField = (field) => {
    setEditingField(editingField === field ? null : field);
  };

  const renderField = (label, fieldName, type = "text") => {
    return (
      <div className="detailGroup">
        <label>{label}:</label>
        {editingField === fieldName ? (
          <>
            <input
              type={type}
              name={fieldName}
              value={user[fieldName]}
              onChange={handleInputChange}
              className="input"
            />
            <FaSave
              className="editIcon"
              onClick={() => toggleEditField(fieldName)}
              title="Save"
            />
          </>
        ) : (
          <>
            <p>{fieldName === "password" ? "********" : user[fieldName]}</p>
            <FaEdit
              className="editIcon"
              onClick={() => toggleEditField(fieldName)}
              title="Edit"
            />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Account Details</h1>
      {renderField("First Name", "firstName")}
      {renderField("Last Name", "lastName")}
      {renderField("Email", "email", "email")}
      {renderField("Phone", "phone", "tel")}
      {renderField("Address Line 1", "addressLine1")}
      {renderField("Address Line 2", "addressLine2")}
      {renderField("Postcode", "postcode")}
      {renderField("Password", "password", "password")}

    
      <div className="detailGroup">
        <label>Account Type:</label>
        {editingField === "accountType" ? (
          <>
            <select
              name="accountType"
              value={user.accountType}
              onChange={handleInputChange}
              className="input"
            >
              <option value="Public">Public</option>
              <option value="Staff">Staff</option>
            </select>
            <FaSave
              className="editIcon"
              onClick={() => toggleEditField("accountType")}
              title="Save"
            />
          </>
        ) : (
          <>
            <p>{user.accountType}</p>
            <FaEdit
              className="editIcon"
              onClick={() => toggleEditField("accountType")}
              title="Edit"
            />
          </>
        )}
      </div>

      {user.accountType === "Public" && (
        <>
          <div className="detailGroup">
            <label>Location Preference:</label>
            {editingField === "locationPreference" ? (
              <>
                <select
                  name="locationPreference"
                  value={user.locationPreference}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="Nearby">Nearby</option>
                  <option value="International">International</option>
                  <option value="Remote">Remote</option>
                </select>
                <FaSave
                  className="editIcon"
                  onClick={() => toggleEditField("locationPreference")}
                  title="Save"
                />
              </>
            ) : (
              <>
                <p>{user.locationPreference}</p>
                <FaEdit
                  className="editIcon"
                  onClick={() => toggleEditField("locationPreference")}
                  title="Edit"
                />
              </>
            )}
          </div>

          <div className="detailGroup">
            <label>Visit Preference:</label>
            {editingField === "visitPreference" ? (
              <>
                <select
                  name="visitPreference"
                  value={user.visitPreference}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <FaSave
                  className="editIcon"
                  onClick={() => toggleEditField("visitPreference")}
                  title="Save"
                />
              </>
            ) : (
              <>
                <p>{user.visitPreference}</p>
                <FaEdit
                  className="editIcon"
                  onClick={() => toggleEditField("visitPreference")}
                  title="Edit"
                />
              </>
            )}
          </div>
        </>
      )}

      {user.accountType === "Staff" && (
        <>
          <h2>Stalls</h2>
          {user.stalls.map((stall, index) => (
            <div key={stall.id} className="stallGroup">
              <div className="detailGroup">
                <label>Stall Name:</label>
                <input
                  type="text"
                  name="stallName"
                  value={stall.stallName}
                  onChange={(e) => handleStallInputChange(index, e)}
                  className="input"
                />
                <FaSave
                  className="editIcon"
                  onClick={() => {}}
                  title="Save"
                />
              </div>

              <div className="detailGroup">
                <label>Market Name:</label>
                <input
                  type="text"
                  name="marketName"
                  value={stall.marketName}
                  onChange={(e) => handleStallInputChange(index, e)}
                  className="input"
                />
                <FaSave
                  className="editIcon"
                  onClick={() => {}}
                  title="Save"
                />
              </div>

              <div className="detailGroup">
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={stall.location}
                  onChange={(e) => handleStallInputChange(index, e)}
                  className="input"
                />
                <FaSave
                  className="editIcon"
                  onClick={() => {}}
                  title="Save"
                />
              </div>
            </div>
          ))}

          <div className="addStallButton">
            <FaPlus
              className="addIcon"
              onClick={addStall}
              title="Add New Stall"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AccountDetailsPage;