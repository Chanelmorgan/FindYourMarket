import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the React App</h1>
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
        </Routes> 

        <Footer />
      </div>
    </Router>
  );
}

export default App;