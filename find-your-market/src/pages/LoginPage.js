import React, { useState } from 'react';
import '../styles/Login.css'; 
import stallsImage from '../assets/images/stalls.png';
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../components/Popup.js';

function Login() {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); 
  const [isErrorPopup, setIsErrorPopup] = useState(false); 

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (password === 'incorrect') {
      setError('Incorrect password, please try again.');
      setIsErrorPopup(true); 
      setShowPopup(true); 
      return;
    }

    setError('');
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

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="password-links">Forgot password?</p>
          </div>

          <button type="submit" className="login-btn">Login</button>
          <Link to="/CreateAccountPage" className="login-links">Create a new account</Link>
        </form> 
      </div> 
    
      <Popup
        show={showPopup}
        onClose={handleClosePopup}
        title={isErrorPopup ? "Error" : "Login Successful!"}
        message={isErrorPopup ? "Incorrect password. Please try again." : "Login was successful"}
        buttonText="Okay"
        onConfirm={handleClosePopup}
        isError={isErrorPopup} 
      /> 

      <img src={stallsImage} alt="Stalls" className="stalls" />
    </div>
  );
}

export default Login;