import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import BookRecommendations from './BookRecommendations'; 
import './App.css'; 
import Navbar from './Navbar.jsx';
import VaporLounge from "./VaporLounge";
import GameMirror from './windows/GameWindow.jsx';
import LibraryWindow from './windows/LibraryWindow.jsx'
import LoungeWindow from './windows/LoungeWindow.jsx'
import Footer from './Footer.jsx'; 

function App() {
  const [bgColor, setBgColor] = useState("bg-white");

  const handleColorChange = (color) => {
    setBgColor(color);
    const root = document.documentElement;
    switch (color) {
      case "bg-blue-100":
        root.style.setProperty('--bg-color', '#3b82f6'); 
        root.style.setProperty('--fg-color', '#facc15');
        root.style.setProperty('--primary-color', '#f472b6'); 
        root.style.setProperty('--secondary-color', '#f472b6');         
        root.style.setProperty('--bg-gradient', 'linear-gradient(180deg, #3b82f6 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #facc15 100%)');
        root.style.setProperty('--fg-gradient', 'linear-gradient(0deg, #3b82f6 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #facc15 100%)');
        break;
      case "bg-yellow-100":
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--fg-color', '#098100'); 
        root.style.setProperty('--primary-color', '#000000'); 
        root.style.setProperty('--secondary-color', '#098100'); 
        root.style.setProperty('--bg-gradient', 'linear-gradient(180deg, #098100 0%, #000000 100%)');
        root.style.setProperty('--fg-gradient', 'linear-gradient(0deg, #098100 0%, #000000 100%)');
        break;
      default:
        root.style.setProperty('--bg-color', '#2b1165');
        root.style.setProperty('--fg-color', '#f54171'); 
        root.style.setProperty('--primary-color', '#f472b6'); 
        root.style.setProperty('--secondary-color', '#f472b6');          
        root.style.setProperty('--bg-gradient', 'linear-gradient(180deg, #2b1165 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #f54171 100%)');
        root.style.setProperty('--fg-gradient', 'linear-gradient(0deg, #2b1165 0%, rgba(26, 58, 130, 1) 37%, rgba(171, 36, 177, 1) 69%, #f54171 100%)');
        break;
    }
  };

  return (
    <Router>
      <Navbar onColorChange={handleColorChange} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="app-body">              
                <div className="sun"></div>
                <div className="overlay"></div>
                <div className={`overlay glitch ${bgColor}`}></div>
                <div className="min-h-screen welcome-text">
                  <div className="p-8">
                    <h1 className="text-2xl font-bold pink cyber-glow:glowPulse">Welcome Home</h1>
                    <p className="mt-4">Enjoy a platformer game, get a book recommendation or just hang.</p>
                  </div>
                </div>
                <ion-icon 
                  className="down-arrow mt-8"
                  size="large" 
                  name="caret-down-outline" 
                  style={{ cursor: "pointer" }} 
                  onClick={() => {
                  const windowsElement = document.getElementById("windows");
                  if (windowsElement) {
                    windowsElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}></ion-icon>
              </div>
              <div id="windows" className="window-container flex flex-col items-center pulse-border">
                <div className="scene flex flex-wrap justify-center gap-32 w-full">
                  <div className="window-div text-xl flex flex-col items-center">
                    <LoungeWindow />
                    <h2 className="text-center mt-4 text-2xl secondary">「 v i b e s 」</h2>
                  </div>
                  <div className="window-div text-xl flex flex-col items-center">
                    <LibraryWindow />
                    <h2 className="text-center mt-4 text-2xl secondary">「 b o o k s 」</h2>
                  </div>
                  <div className="window-div text-xl flex flex-col items-center">                    
                    <GameMirror />
                    <h2 className="text-center mt-4 text-2xl secondary">「 p l a y 」</h2>
                  </div>
                </div>
              </div>              
            </div>

          }
        />
        <Route path="/book-recommendations" element={<BookRecommendations />} />
        <Route path="/vapor-lounge" element={<VaporLounge />} />                
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
