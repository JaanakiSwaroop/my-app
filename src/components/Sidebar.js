import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faCoins } from '@fortawesome/free-solid-svg-icons'; 
import './Sidebar.css'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="hamburger" onClick={toggleSidebar}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </button>
      <div className="nav-links">
        <NavLink to="/" label="Home" location={location} icon={faHome} />
        <NavLink to="/graph" label="Graph" location={location} icon={faChartBar} />
        <NavLink to="/crypto" label="Crypto" location={location} icon={faCoins} />
      </div>
    </div>
  );
}

const NavLink = ({ to, label, location, icon }) => {
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`}>
      <FontAwesomeIcon icon={icon} className="nav-icon" /> {/* Render the icon */}
      {label}
    </Link>
  );
}

export default Sidebar;
