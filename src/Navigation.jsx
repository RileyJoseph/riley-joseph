import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ onColorChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar p-4">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-4">          
          <Link to="/" className="home-btn anti-btn py-2" onClick={handleCloseMenu}>Home</Link>   
        </div>
        <div className="relative">
          <button className="dropdown px-4 py-2 text-white rounded" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 shadow-lg rounded bg-transparent dropdown-ul">
              <li><Link to="/" className="nav-btn py-2" onClick={handleCloseMenu}>Home</Link></li>
              <li><Link to="/portfolio" className="nav-btn py-2" onClick={handleCloseMenu}>Portfolio</Link></li>
              <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About Me</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
