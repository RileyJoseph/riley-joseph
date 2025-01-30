import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = ({ onColorChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [bgColor, setBgColor] = useState();
  const handleColorChange = (color) => {
    onColorChange(color); // Calls the function passed from App to change the color
    setIsDropdownOpen(false);
    setBgColor(color);
     // Optionally, close the dropdown after selection
  };

  return (
    <div className="navbar p-4">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-4">          
          <Link to="/" className="home-logo"></Link>
          <Link to="/" className="anti-btn py-2 cyber-glow:glowPulse pink">Home</Link>          
          {/* <Link to="/vapor-lounge" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">Vapor Lounge</Link> */}
        </div>

        {/* Color Picker Dropdown */}
        <div className="relative">
          <button className="dropdown px-4 py-2 text-white rounded cyber-glow:glowPulse" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Mode</button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 shadow-lg rounded bg-transparent">
              <li className="">
                <button className="dropdown-btn cyber-glow:glowPulse block m-auto px-4 py-2 hover:bg-yellow-300 text-cente text-sm" onClick={() => handleColorChange("#2b1165")}>Vaporwave</button>
              </li>
              <li>
                <button className="dropdown-btn cyber-glow:glowPulse block px-4 py-2 hover:bg-yellow-300 text-sm" onClick={() => handleColorChange("bg-yellow-100")}>Matrix</button>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
