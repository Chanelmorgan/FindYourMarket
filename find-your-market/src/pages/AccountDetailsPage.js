import React, { useState } from "react";
import { FaEdit, FaSave, FaPlus, FaSignOutAlt } from "react-icons/fa";
import "../styles/AccountDetails.css";
import Popup from "../components/Popup"; 
import { useNavigate } from "react-router-dom";
import profileImage from '../assets/images/profile.png';

const AccountDetails = () => {
  const [user, setUser] = useState({
    firstName: "Chanel",
    lastName: "Morgan",
    email: "chanel@uea.ac.uk",
    phone: "+1234567890",
    addressLine1: "123 Norwich Road",
    addressLine2: "Apt 4B",
    postcode: "12345",
    password: "password123",
    accountType: "Staff", 
    locationPreference: "Nearby", 
    visitPreference: "Daily",  
    profilePhoto: profileImage,
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
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutPopup(true); 
  };

  const handleLogoutConfirm = () => {
    setShowLogoutPopup(false);
    navigate("/Login");
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false); 
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
              onChange={(e) => setUser({...user, [fieldName]: e.target.value})}
              className="input"
            />
            <FaSave className="editIcon" onClick={() => toggleEditField(fieldName)} title="Save" />
          </>
        ) : (
          <>
            <p>{fieldName === "password" ? "********" : user[fieldName]}</p>
            <FaEdit className="editIcon" onClick={() => toggleEditField(fieldName)} title="Edit" />
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container-account-details">
      <div className="header-account-details">
        <div className="headerText">Account Details</div>
        <button className="logoutButton" onClick={handleLogoutClick}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
      <Popup
        show={showLogoutPopup}
        onClose={handleLogoutCancel}
        title="Logout Confirmation"
        message="Are you sure you want to log out?"
        buttonText="Yes, log me out"
        onConfirm={handleLogoutConfirm}
      />

      <div className="section-box">
        <div className="profileSection">
          <div className="profilePhotoWrapper">
            <img src={user.profilePhoto} alt="Profile" className="profilePhoto" />
            <label htmlFor="profilePhotoInput" className="editProfilePhoto">
              <FaEdit />
            </label>
            <input
              type="file"
              id="profilePhotoInput"
              className="fileInput"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setUser((prevUser) => ({
                      ...prevUser,
                      profilePhoto: reader.result,
                    }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          <div className="nameSection">
            {renderField("First Name", "firstName")}
            {renderField("Last Name", "lastName")}
          </div>
        </div>
      </div>

      <div className="section-box">
        {renderField("Email", "email", "email")}
        {renderField("Phone", "phone", "tel")}
        {renderField("Address Line 1", "addressLine1")}
        {renderField("Address Line 2", "addressLine2")}
        {renderField("Postcode", "postcode")}
        {renderField("Password", "password", "password")}
      </div>

      <div className="section-box">
        <div className="detailGroup">
          <label>Account Type:</label>
          {editingField === "accountType" ? (
            <>
              <select
                name="accountType"
                value={user.accountType}
                onChange={(e) => setUser({...user, accountType: e.target.value})}
                className="input"
              >
                <option value="Public">Public</option>
                <option value="Staff">Staff</option>
              </select>
              <FaSave className="editIcon" onClick={() => toggleEditField("accountType")} title="Save" />
            </>
          ) : (
            <>
              <p>{user.accountType}</p>
              <FaEdit className="editIcon" onClick={() => toggleEditField("accountType")} title="Edit" />
            </>
          )}
        </div>
      </div>

      {user.accountType === "Public" && (
        <div className="section-box">
          <div className="detailGroup">
            <label>Location Preference:</label>
            {editingField === "locationPreference" ? (
              <>
                <select
                  name="locationPreference"
                  value={user.locationPreference}
                  onChange={(e) => setUser({...user, locationPreference: e.target.value})}
                  className="input"
                >
                  <option value="Nearby">Great Yarmouth</option>
                  <option value="International">Norwich</option>
                  <option value="Remote">Cambridge</option>
                </select>
                <FaSave className="editIcon" onClick={() => toggleEditField("locationPreference")} title="Save" />
              </>
            ) : (
              <>
                <p>{user.locationPreference}</p>
                <FaEdit className="editIcon" onClick={() => toggleEditField("locationPreference")} title="Edit" />
              </>
            )}
          </div>

          <div className="detailGroup">
            <label>Visit Time Preference:</label>
            {editingField === "visitPreference" ? (
              <>
                <select
                  name="visitPreference"
                  value={user.visitPreference}
                  onChange={(e) => setUser({...user, visitPreference: e.target.value})}
                  className="input"
                >
                  <option value="Daily">01:00pm</option>
                  <option value="Weekly">02:00pm</option>
                  <option value="Monthly">03:00pm</option>
                </select>
                <FaSave className="editIcon" onClick={() => toggleEditField("visitPreference")} title="Save" />
              </>
            ) : (
              <>
                <p>{user.visitPreference}</p>
                <FaEdit className="editIcon" onClick={() => toggleEditField("visitPreference")} title="Edit" />
              </>
            )}
          </div>
        </div>
      )}

{user.accountType === "Staff" && (
  <div className="section-box">
    <div className="stalls-header">
      <h2 className="section-box-title">Stalls</h2>
      <FaPlus
        className="addIcon"
        onClick={() => {
          const newStall = { id: user.stalls.length + 1, stallName: "", marketName: "", location: "" };
          setUser((prevUser) => ({
            ...prevUser,
            stalls: [...prevUser.stalls, newStall],
          }));
        }}
        title="Add New Stall"
      />
    </div>
    {user.stalls.map((stall, index) => (
      <div key={stall.id} className="stallGroup">
        <div className="detailGroup">
          <label>Stall Name:</label>
          <input
            type="text"
            name="stallName"
            value={stall.stallName}
            onChange={(e) => {
              const updatedStalls = [...user.stalls];
              updatedStalls[index].stallName = e.target.value;
              setUser((prevUser) => ({
                ...prevUser,
                stalls: updatedStalls,
              }));
            }}
            className="input"
          />
          <FaSave className="editIcon" title="Save" />
        </div>

        <div className="detailGroup">
          <label>Market Name:</label>
          <input
            type="text"
            name="marketName"
            value={stall.marketName}
            onChange={(e) => {
              const updatedStalls = [...user.stalls];
              updatedStalls[index].marketName = e.target.value;
              setUser((prevUser) => ({
                ...prevUser,
                stalls: updatedStalls,
              }));
            }}
            className="input"
          />
          <FaSave className="editIcon" title="Save" />
        </div>

        <div className="detailGroup">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={stall.location}
            onChange={(e) => {
              const updatedStalls = [...user.stalls];
              updatedStalls[index].location = e.target.value;
              setUser((prevUser) => ({
                ...prevUser,
                stalls: updatedStalls,
              }));
            }}
            className="input"
          />
          <FaSave className="editIcon" title="Save" />
        </div>
      </div>
    ))}
  </div>
)}
</div>
)};

export default AccountDetails;