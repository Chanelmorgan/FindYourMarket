import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountDetails from './pages/AccountDetailsPage';
import AppSettings from './pages/AppSettingsPage';
import Markets from './pages/MarketsPage'; 
import Header from './components/Header';
import Market from './components/Market'; 
import StallPage from './pages/StallPage';
import './styles/index.css';

function AppContent() {
  const location = useLocation();
  const noHeaderPaths = ['/Login', '/CreateAccountPage'];

  return (
    <div className="App">
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} /> 
        <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
        <Route path="/AccountDetails" element={<AccountDetails />} />
        <Route path="/AppSettings" element={<AppSettings />} />
        <Route path="/Markets" element={<Markets />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Stall" element={<StallPage />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isHighContrast, setHighContrast] = useState(
    JSON.parse(localStorage.getItem('isHighContrast')) || false
  );
  const [isDyslexiaFriendly, setDyslexiaFriendly] = useState(
    JSON.parse(localStorage.getItem('isDyslexiaFriendly')) || false
  );

  useEffect(() => {
    document.body.classList.toggle('high-contrast', isHighContrast);
    document.body.classList.toggle('dyslexia-friendly', isDyslexiaFriendly);
  }, [isHighContrast, isDyslexiaFriendly]);

  const toggleHighContrast = () => {
    setHighContrast((prev) => {
      const newValue = !prev;
      localStorage.setItem('isHighContrast', JSON.stringify(newValue));
      return newValue;
    });
  };

  const toggleDyslexiaFriendly = () => {
    setDyslexiaFriendly((prev) => {
      const newValue = !prev;
      localStorage.setItem('isDyslexiaFriendly', JSON.stringify(newValue));
      return newValue;
    });
  };
  return (
    <Router>
      <AppContent />
      <button onClick={toggleHighContrast}>
        {isHighContrast ? 'Disable High Contrast Mode' : 'Enable High Contrast Mode'}
      </button>
      <button onClick={toggleDyslexiaFriendly}>
        {isDyslexiaFriendly ? 'Disable Dyslexia-Friendly Mode' : 'Enable Dyslexia-Friendly Mode'}
      </button>
    </Router>
  );
}

export default App;