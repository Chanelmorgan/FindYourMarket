import React, { useState } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
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
    accountType: "Public",
  });

  const [editingField, setEditingField] = useState(null); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
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
    </div>
  );
};

export default AccountDetailsPage;