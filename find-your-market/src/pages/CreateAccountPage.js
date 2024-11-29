import React, { useState } from 'react';
import Select from 'react-select';  
import '../styles/CreateAccount.css'; 
import stallsImage from '../assets/images/stalls.png';
import { Link, useNavigate } from 'react-router-dom'; 
import Popup from '../components/Popup.js';

function CreateAccountPage() { 
  const navigate = useNavigate(); 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [postCode, setPostCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accountType, setAccountType] = useState(''); 
  const [publicRole, setPublicRole] = useState(null);      
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); 
  const [isErrorPopup, setIsErrorPopup] = useState(false); 
  const [isIncorrectPasswordPopup, setIsIncorrectPasswordPopup] = useState(false); 
  const [showAddStallForm, setShowAddStallForm] = useState(false);
  const [newStallName, setNewStallName] = useState('');
  const [newStallDescription, setNewStallDescription] = useState('');
  const [newStallLocation, setNewStallLocation] = useState('');
  const [staffType, setStaffType] = useState(null); 
  const [staffTypeOptions, setStaffTypeOptions] = useState([
    { value: 'Retailer', label: 'Retailer' },
    { value: 'Wholesaler', label: 'Wholesaler' }
  ]); 

  const handleAddStallClick = () => {
    setShowAddStallForm(true);
  };

  const handleSaveStall = () => {
    if (newStallName && newStallDescription && newStallLocation) {
      const newOption = { value: newStallName, label: newStallName };

      // Update the options list with the new stall
      setStaffTypeOptions((prevOptions) => [...prevOptions, newOption]);

      // Automatically set the new stall as the selected option
      setStaffType(newOption);

      // Reset and close the form
      setShowAddStallForm(false);
      setNewStallName('');
      setNewStallDescription('');
      setNewStallLocation('');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation: check if all required fields are filled
    if (!firstName || !lastName || !email || !phone || !addressLine1 || !postCode || !password || !confirmPassword || !accountType) {
      setError('Please fill in all required fields.');
      return;
    }


    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsErrorPopup(true); 
      setShowPopup(true); 
      return;
    }

     
       if (password =="incorrect"){
        setError('Password is incorrect. It must be at least 8 characters long and contain both letters and numbers.');
        setIsIncorrectPasswordPopup(true); 
        setIsErrorPopup(false); 
        setShowPopup(true);
        return;
      }

    setError('');
    setIsErrorPopup(false);
    setShowPopup(true); 
  };

  const handleClosePopup = () => {
    setShowPopup(false); 
    
    
    if (!isErrorPopup) {
      navigate('/');  
    }

  
    setError('');
    setIsErrorPopup(false);
  };

  
  const publicRoleOptions = [
    { value: 'Customer', label: 'Customer' },
    { value: 'Subscriber', label: 'Subscriber' }
  ];


  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h2>Create Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group name-group">
            <div className="input-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="address-line-1">Address Line 1</label>
            <input
              type="text"
              id="address-line-1"
              placeholder="Address Line 1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="address-line-2">Address Line 2</label>
            <input
              type="text"
              id="address-line-2"
              placeholder="Address Line 2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="post-code">Post Code</label>
            <input
              type="text"
              id="post-code"
              placeholder="Post Code"
              value={postCode}
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Account Type</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="Public"
                  checked={accountType === 'Public'}
                  onChange={(e) => setAccountType(e.target.value)}
                />
                Public
              </label>
              <label>
                <input
                  type="radio"
                  value="Staff"
                  checked={accountType === 'Staff'}
                  onChange={(e) => setAccountType(e.target.value)}
                />
                Staff
              </label>
            </div>
          </div> 

          {accountType === 'Public' && (
            <div className="input-group">
              <label htmlFor="public-role">Location Preferences</label>
              <Select
                id="public-role"
                options={publicRoleOptions}
                value={publicRole}
                onChange={setPublicRole}
                placeholder="Select "
                isSearchable={true}
              />
            </div>
            
          )}
          

          {accountType === 'Staff' && (
            <div className="input-group">
              <label htmlFor="staff-type">Stall Name</label>
              <Select
                id="staff-type"
                options={staffTypeOptions}
                value={staffType}
                onChange={setStaffType}
                placeholder="Stall Name"
                isSearchable={true}
              />
               <p className="add-stall-link" onClick={handleAddStallClick}>
                    + Add New Stall
              </p>
            </div>
          )}
             {showAddStallForm && (
        <div className="new-stall-form">
          <h3>Add New Stall</h3>
          <div className="input-group">
            <label htmlFor="stall-name">Stall Name</label>
            <input
              type="text"
              id="stall-name"
              value={newStallName}
              onChange={(e) => setNewStallName(e.target.value)}
              placeholder="Enter stall name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="stall-description">Description</label>
            <input
              type="text"
              id="stall-description"
              value={newStallDescription}
              onChange={(e) => setNewStallDescription(e.target.value)}
              placeholder="Enter stall description"
            />
          </div>
          <div className="input-group">
            <label htmlFor="stall-location">Location</label>
            <input
              type="text"
              id="stall-location"
              value={newStallLocation}
              onChange={(e) => setNewStallLocation(e.target.value)}
              placeholder="Enter stall location"
            />
          </div>
          <button className="new-stall-form-save-btn" onClick={handleSaveStall}>Save Stall</button>
          <button className="new-stall-form-save-btn" onClick={() => setShowAddStallForm(false)}>Cancel</button>
        </div>
      )}

          <button type="submit" className="create-account-btn">Create Account</button>
          <Link to="/Login" className="login-links">Login</Link>
        </form> 
      </div> 
    
      <Popup
        show={showPopup && !isIncorrectPasswordPopup && !isErrorPopup}
        onClose={handleClosePopup}
        title="Account Created!"
        message="Your account has been successfully created."
        buttonText="Okay"
        onConfirm={handleClosePopup}
        isError={false}
      /> 

      <Popup
        show={showPopup && isErrorPopup}
        onClose={handleClosePopup}
        title="Error"
        message="Passwords do not match. Please try again."
        buttonText="Okay"
        onConfirm={handleClosePopup}
        isError={true}
      />

      <Popup
        show={showPopup && isIncorrectPasswordPopup}
        onClose={handleClosePopup}
        title="Error"
        message="Password is incorrect. It must be at least 8 characters long and contain both letters and numbers."
        buttonText="Okay"
        onConfirm={handleClosePopup}
        isError={true}
      />

      <img src={stallsImage} alt="Stalls" className="create-account-stalls" />
    </div>
  );
}

export default CreateAccountPage;