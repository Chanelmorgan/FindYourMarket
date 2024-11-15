import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "../styles/Header.css"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
   
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`sideMenu ${isMenuOpen ? "open" : ""}`}>
        <div className="closeIcon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <ul className="menuItems">
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/Markets" onClick={toggleMenu}>Markets</a></li>
          <li><a href="/AppSettings" onClick={toggleMenu}>App Settings</a></li>
          <li><a href="/AccountDetails" onClick={toggleMenu}>Account Details</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;