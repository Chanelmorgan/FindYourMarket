import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';



function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} /> 
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
          
        </Routes> 

      </div>
    </Router>
  );
}

export default App;