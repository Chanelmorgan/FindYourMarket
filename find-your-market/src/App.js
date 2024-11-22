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
import StallStaffPage from './pages/StallStaffPage';

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
        <Route path="/StallStaffPage" element={<StallStaffPage />} />
      </Routes>
    </div>
  );
}

function App() {
  
  return (
    <Router>
      <AppContent />
      
    </Router>
  );
}

export default App;