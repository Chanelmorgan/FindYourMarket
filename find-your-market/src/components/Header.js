import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import "../styles/Header.css";
import Popup from "../components/Popup"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [marketsOpen, setMarketsOpen] = useState(false); 
  const [stallsOpen, setStallsOpen] = useState({
    market1: false,
    market2: false,
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMarketsDropdown = () => setMarketsOpen(!marketsOpen);

  const toggleStallsDropdown = (market) => {
    setStallsOpen((prev) => ({
      ...prev,
      [market]: !prev[market],
    }));
  };
  
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate(); 

  const handleLogoutClick = () => {
    setShowLogoutPopup(true); 
  };

  const handleLogoutConfirm = () => {
    setShowLogoutPopup(false); 
    console.log("Navigating to login page...");
    navigate("/Login"); 
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false); 
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
          <li>
            <a href="/" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <button className="menuButton" onClick={toggleMarketsDropdown}>
              Markets
              <FaChevronRight className={`dropdown-arrow ${marketsOpen ? "open" : ""}`} />
            </button>
            <ul className={`dropdown ${marketsOpen ? "open" : ""}`}>
              <li>
                <button className="menuButton" onClick={() => toggleStallsDropdown("market1")}>
                  Market 1
                  <FaChevronRight
                    className={`dropdown-arrow ${stallsOpen.market1 ? "open" : ""}`}
                  />
                </button>
                <ul className={`stallsDropdown ${stallsOpen.market1 ? "open" : ""}`}>
                  <li>Stall 1</li>
                  <li>Stall 2</li>
                  <li>Stall 3</li>
                </ul>
              </li>
              <li>
                <button className="menuButton" onClick={() => toggleStallsDropdown("market2")}>
                  Market 2
                  <FaChevronRight
                    className={`dropdown-arrow ${stallsOpen.market2 ? "open" : ""}`}
                  />
                </button>
                <ul className={`stallsDropdown ${stallsOpen.market2 ? "open" : ""}`}>
                  <li>Stall A</li>
                  <li>Stall B</li>
                  <li>Stall C</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="/AppSettings" onClick={toggleMenu}>App Settings</a>
          </li>
          <li>
            <a href="/AccountDetails" onClick={toggleMenu}>Account Details</a>
          </li>
        </ul>
        <div className="logoutButton-header">
          <button className="logoutButton-header-btn" onClick={handleLogoutClick}>
            <FaSignOutAlt /> Logout
          </button>
          <Popup
            show={showLogoutPopup}
            onClose={handleLogoutCancel}
            title="Logout Confirmation"
            message="Are you sure you want to log out?"
            buttonText="Yes, log me out"
            onConfirm={handleLogoutConfirm}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;