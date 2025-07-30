import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar p-4 relative">
      <nav className="flex justify-between items-center w-full">
        <div className="flex gap-4">          
          <Link to="/" className="home-btn anti-btn py-2" onClick={handleCloseMenu}>Home</Link>   
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><a target="_blank" href="https://music.apple.com/us/artist/coat/1670318082" className="nav-btn py-2">Music</a></li>
          <li><a target="_blank" href="/" className="nav-btn py-2">Photography</a></li>
          <li><Link to="/portfolio" className="nav-btn py-2" onClick={handleCloseMenu}>Work</Link></li>
          <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About Me</Link></li>
          <li><Link to="/contact" className="nav-btn py-2" onClick={handleCloseMenu}>Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="dropdown px-4 py-2 text-white rounded" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Menu
          </button>
        </div>
        
        {/* Mobile Fullscreen Nav */}
        {isDropdownOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden"
          >
            <ul className="text-white text-2xl space-y-6">
              <li><Link to="/" className="nav-btn py-2" onClick={handleCloseMenu}>Home</Link></li>
              <li><Link to="/portfolio" className="nav-btn py-2" onClick={handleCloseMenu}>Portfolio</Link></li>
              <li><Link to="/bio" className="nav-btn py-2" onClick={handleCloseMenu}>About Me</Link></li>
            </ul>
            <button className="text-white mt-6 text-xl" onClick={handleCloseMenu}>Close</button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
