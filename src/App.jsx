import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import BookRecommendations from './BookRecommendations'; 
import './App.css'; 
import Navbar from './NavBar.jsx';
import VaporLounge from "./VaporLounge";
import GameMirror from './windows/GameWindow.jsx';
import LibraryWindow from './windows/LibraryWindow.jsx'
import LoungeWindow from './windows/LoungeWindow.jsx'
import Footer from './footer.jsx';
import Portfolio from "./Portfolio";


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
              {/* <div className="app-body w-full h-[100vh] bg-cover bg-center bg-no-repeat md:relative absolute" style={{ backgroundImage: "url('/images/leaves.jpeg')" }}>               */}
              <div className="app-body w-full h-[100vh] bg-cover bg-center bg-no-repeat md:relative absolute">              
                <div className="overlay"></div>
                <div className={`overlay glitch ${bgColor}`}></div>
                <div className="min-h-screen welcome-text flex flex-col items-center text-center">
                  <img src="/images/outline-bw.png" alt="Riley Joseph" className="cutout w-190 mb-4" />
                  <h1 className="name text-2xl font-bold">Riley Joseph</h1>
                  <p className="mt-4 info flex justify-between w-full px-8 md:w-3/4">
                    <span className="left flex flex-col text-left w-1/2">
                      <span>Software Engineer ● Web Developer</span>
                      <span>Musician ● Photographer</span>
                      <span>Gamer ● Cinephile</span>
                      <span>Artist ● Hobbies</span>
                    </span>
                    <span className="right text-right w-1/2 self-start">Oklahoma City, Oklahoma</span>
                  </p>
      
                  {/* <p className="mt-4">Enjoy a platformer game I build in 2015, exlore my portfolio of website/applications <br/> I've build throughout the years, get a book recommendation or just hang.</p> */}
                  {/* <ion-icon 
                    className="down-arrow mt-8"
                    size="large" 
                    name="caret-down-outline" 
                    style={{ cursor: "pointer" }} 
                    onClick={() => {
                    const windowsElement = document.getElementById("bio");
                    if (windowsElement) {
                      windowsElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}></ion-icon>               */}
                </div>
                {/* <h2 className="purple welcome-home font-bold cyber-glow:glowPulse">Welcome Home</h2> */}
              </div>
              {/* <div id="bio" className="bio home-section pulse-border flex flex-col md:flex-row items-center md:items-start">
                <div className="headshot w-full md:w-1/3 h-[100vh] bg-cover bg-center bg-no-repeat md:relative absolute left-0"
                    style={{ backgroundImage: "url('/images/shoe-tie.jpg')" }}>
                </div>
                <div className="info flex-1 p-8 md:p-16 text-center md:text-left">
                  <h2 className='name'>Riley Joseph</h2>
                  <h2 className='titles'>Software Engineer, Web Developer, Musician, Photographer.</h2>
                  <p className="text-lg md:text-xl">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p> 
                </div>
              </div> */}
              <div id="windows" className="home-section window-container flex flex-col items-center pulse-border">
                <div className="scene flex flex-wrap justify-center gap-32 w-full">
                  <div className="window-div text-xl flex flex-col items-center">
                    <LoungeWindow />
                    <h2 className="text-center mt-4 text-2xl secondary">「 m u s i c 」</h2>
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
        <Route path="/portfolio" element={<Portfolio />} />              
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
