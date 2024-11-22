import React, { useState } from "react";
import "../styles/AppSettings.css"; 
import Popup from '../components/Popup.js';

const AppSettings = () => {
  const [notificationPreference, setNotificationPreference] = useState("all");
  const [locationAllowed, setLocationAllowed] = useState(true);
  const [dataAllowed, setDataAllowed] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // Popup state


  const handleNotificationChange = (e) => {
    setNotificationPreference(e.target.value);
  };

  const toggleLocationPermission = () => {
    setLocationAllowed(!locationAllowed);
  };

  const toggleDataPermission = () => {
    setDataAllowed(!dataAllowed);
  };

  const handleSave = () => {
    setShowPopup(true); 
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
  };

  return (
    <div className="settings-container">
      <h1 className="settings-heading">App Settings</h1>

      <section className="settings-section">
        <h2 className="settings-section-heading">Notifications</h2>
        <div className="radio-group-settings">
          <label>
            <input
              type="radio"
              name="notifications"
              value="all"
              checked={notificationPreference === "all"}
              onChange={handleNotificationChange}
            />
            All Notifications
          </label>
          <label>
            <input
              type="radio"
              name="notifications"
              value="important"
              checked={notificationPreference === "important"}
              onChange={handleNotificationChange}
            />
            Only Email Notifications
          </label>
          <label>
            <input
              type="radio"
              name="notifications"
              value="none"
              checked={notificationPreference === "none"}
              onChange={handleNotificationChange}
            />
            Only Push Notifications
          </label>
          <label>
            <input
              type="radio"
              name="notifications"
              value="none"
              checked={notificationPreference === "none"}
              onChange={handleNotificationChange}
            />
            No Notifications
          </label>
        </div>
      </section>

      <section className="settings-section">
        <h2 className="settings-section-heading">Permissions</h2>
        <div>
          <p className="permission-text">
            <strong>Location Access:</strong> {locationAllowed ? "Allowed" : "Not Allowed"}
          </p>
          <button onClick={toggleLocationPermission} className="settings-button">
            {locationAllowed ? "Remove Access" : "Allow Access"}
          </button>
        </div>
        <div>
          <p className="permission-data-text">
            <strong>Data Access:</strong> {dataAllowed ? "Allowed" : "Not Allowed"}
          </p>
          <button onClick={toggleDataPermission} className="settings-button">
            {dataAllowed ? "Remove Access" : "Allow Access"}
          </button>
        </div>
      </section>

      <section className="settings-section">
        <h2 className="settings-section-heading">General</h2>
        <ul className="link-list">
          <li>
            <a href="#terms" className="settings-link">
              Terms and Conditions
            </a>
          </li>
          <li>
            <a href="#privacy" className="settings-link">
              Privacy Policy
            </a>
          </li>
        </ul>
      </section>

      <section className="settings-section">
        <h2 className="settings-section-heading">Support</h2>
        <ul className="link-list">
          <li>
            <a href="#contact" className="settings-link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#help" className="settings-link">
              Help
            </a>
          </li>
        </ul>
      </section>

      <button onClick={handleSave} className="settings-button" >
        Save
      </button>

      <Popup
        show={showPopup}
        onClose={handleClosePopup}
        title="Save Successful!"
        message="Your Settings are now successfully saved :)"
        buttonText="Save"
        onConfirm={handleClosePopup}
      /> 
    </div>
  );
};

export default AppSettings;