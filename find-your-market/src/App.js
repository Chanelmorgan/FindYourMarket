import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountDetailsPage from './pages/AccountDetailsPage';
import AppSettings from './pages/AppSettingsPage';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} /> 
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
          <Route path="/AccountDetailsPage" element={<AccountDetailsPage/>} />
          <Route path="/AppSettings" element={<AppSettings/>} />
          
        </Routes> 

      </div>
    </Router>
  );
}

export default App;