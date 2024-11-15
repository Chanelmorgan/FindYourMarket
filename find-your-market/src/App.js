import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import AccountDetails from './pages/AccountDetailsPage';
import AppSettings from './pages/AppSettingsPage';
import Markets from './pages/MarketsPage'; 
import Header from './components/Header';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} /> 
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
          <Route path="/AccountDetails" element={<AccountDetails/>} />
          <Route path="/AppSettings" element={<AppSettings/>} />
          <Route path="/Markets" element={<Markets/>} />
        </Routes> 

      </div>
    </Router>
  );
}

export default App;