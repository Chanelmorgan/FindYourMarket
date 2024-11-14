import React, { useState } from 'react';
import '../styles/Login.css'; 
import stallsImage from '../assets/images/stalls.png';
import { Link } from 'react-router-dom';

function CreateAccountPage() {
  // Local state to store form values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Clear error if fields are valid
    setError('');
    alert('Login successful');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Create Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="password-links">Forgot password?</p>
          </div>

          <button type="submit" className="login-btn">Login</button>
          <Link to="/CreateAccountPage" className="login-links">Create a new account</Link>
        </form> 
      </div> 
      
        <img src={stallsImage} alt="Stalls" className="stalls" />
      
    </div>

    
  );
}

export default CreateAccountPage;