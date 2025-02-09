import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookRecommendations from './BookRecommendations'; 
import './App.css'; 
import Navigation from './Navigation.jsx';
import VaporLounge from "./VaporLounge";
import GameMirror from './windows/GameWindow.jsx';
import LibraryWindow from './windows/LibraryWindow.jsx'
import LoungeWindow from './windows/LoungeWindow.jsx'
import Footer from './Footer.jsx';
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Bio from './Bio.jsx';

const greetings = [
  "Hey, nice to meet you.",
  "Hi, thanks for coming to my site.",
  "Greetings!",
  "Welcome to my portfolio!",
  "Hello there, glad you stopped by.",
  "Nice to see you here!",
  "Hope you're having a great day!",
  "Hey! Let's build something cool together."
]

function App() {
  const [bgColor, setBgColor] = useState("bg-white");
  const [greeting, setGreeting] = useState("Hey, nice to meet you.")

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

  useEffect(() => {
    // Select a random greeting when the component mounts
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);
  }, []);

  // const greetings = () => {

  // }

  return (
    <Router>
      <Navigation onColorChange={handleColorChange} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <div className="app-body w-full h-[100vh] bg-cover bg-center bg-no-repeat md:relative absolute" style={{ backgroundImage: "url('/images/leaves.jpeg')" }}>               */}
              <div className="app-body w-full h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative">
                <div className="overlay"></div>
                {/* <div className="sun"></div> */}
                <div className={`overlay glitch ${bgColor}`}></div>
                <img src="/images/closeup-bw.JPG" alt="Riley Joseph" className="headshot w-46 h-46 rounded-full mb-4 shadow-lg"/>
                <div className="min-h-screen welcome-text flex flex-col items-center text-center lg:w-3/4">              
                  <h1 className="name text-2xl font-bold">Riley Joseph</h1>
                  <div className="info flex justify-between w-full px-8 md:w-2/4">
                    <span className="left flex flex-col text-left jobs">                      
                      <span>Software Engineer ● Web Developer <span class="dot inline-only">●</span></span>
                      
                      <span>Musician ● Photographer</span>
                    </span>
                    
                    <h2 className='subheading text-right md:w-2/4'>{greeting}</h2>
                  </div>
                  <div className='md:w-3/4 code'>
                    {/* 🟦 Frontend Development (Blue) */}
                    <span className="code-blue">HTML</span> <span className="dot">●</span> 
                    <span className="code-blue">CSS</span> <span className="dot">●</span> 
                    <span className="code-blue">SCSS</span> <span className="dot">●</span> 
                    <span className="code-blue">Tailwind</span> <span className="dot">●</span> 
                    <span className="code-blue">UX</span> <span className="dot">●</span> 
                    <span className="code-blue">UI</span> <span className="dot">●</span> 

                    {/* 🔴 JavaScript & Backend (Red) */}
                    <span className="code-red">JavaScript</span> <span className="dot">●</span> 
                    <span className="code-red">Node.js</span> <span className="dot">●</span> 
                    <span className="code-red">TypeScript</span> <span className="dot">●</span>
                    <span className="code-red">Express</span> <span className="dot">●</span>
                    <span className="code-red">PHP</span> <span className="dot">●</span>

                    {/* 🟣 JavaScript Frameworks (Purple) */}
                    <span className="code-purple">Vue</span> <span className="dot">●</span> 
                    <span className="code-purple">React</span> <span className="dot">●</span> 
                    <span className="code-purple">Angular</span> <span className="dot">●</span> 
                    <span className="code-purple">Meteor</span> <span className="dot">●</span> 
                    <span className="code-purple">Blaze</span> <span className="dot">●</span> 

                    {/* 🟡 Databases (Yellow) */}
                    <span className="code-yellow">MongoDB</span> <span className="dot">●</span> 
                    <span className="code-yellow">PostgreSQL</span> <span className="dot">●</span> 
                    <span className="code-yellow">MySQL</span> <span className="dot">●</span> 

                    {/* 🟢 CMS & Website Builders (Green) */}
                    <span className="code-green">Craft</span> <span className="dot">●</span> 
                    <span className="code-green">WordPress</span> <span className="dot">●</span> 
                    <span className="code-green">Shopify</span> <span className="dot">●</span> 
                    <span className="code-green">WIX</span> <span className="dot">●</span> 
                    <span className="code-green">Webflow</span> <span className="dot">●</span> 
                    <span className="code-green">Squarespace</span> <span className="dot">●</span> 

                    {/* 🔵 DevOps & Tools (Blue) */}
                    <span className="code-blue">Git</span> <span className="dot">●</span> 
                    <span className="code-blue">NPM</span> <span className="dot">●</span>                                         
                    <span className="code-blue">AWS</span> <span className="dot">●</span> 
                    <span className="code-blue">Docker</span> <span className="dot">●</span> 
                    <span className="code-blue">Gulp</span> <span className="dot">●</span> 
                    <span className="code-blue">Yarn</span> <span className="dot">●</span> 
                    <span className="code-blue">APIs</span> <span className="dot">●</span> 

                    {/* 🟢 Project & Team Management (Green) */}
                    <span className="code-green">Team Management</span> <span className="dot">●</span> 
                    <span className="code-green">Client Communication</span> <span className="dot">●</span> 
                    <span className="code-green">Database Management</span> <span className="dot">●</span> 
                    <span className="code-green">JIRA</span> <span className="dot">●</span> 

                  </div>

      
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
                <div className="links absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl flex justify-between px-8 lg:flex md:flex sm:hidden">
                    <Link to="/portfolio" className="hero-links hire-me-btn px-6 py-3 text-white transition duration-300 hover:bg-gray-600">
                      Portfolio
                    </Link>
                    {/* <Link to="/contact" className="hero-links hire-me-btn px-6 py-3 text-white transition duration-300 hover:bg-gray-600">
                      Music
                    </Link> */}
                    <Link to="/bio" className="hero-links hire-me-btn px-6 py-3 text-white transition duration-300 hover:bg-gray-600">
                      About Me
                    </Link>
                </div>                
                <div className='hire-me fixed right-10 top-1/2 transform -translate-y-1/2'>
                  <Link to="/contact" className="hire-me-btn hire-me-btn bg-white text-black px-6 py-11 rounded-full shadow-lg text-lg font-semibold transition duration-300 hover:bg-gray-300">Hire Me</Link>
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


              {/* WINDOWS */}
              {/* <div id="windows" className="home-section window-container flex flex-col items-center pulse-border">
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
              </div>               */}
            </div>

          }
        />
        <Route path="/book-recommendations" element={<BookRecommendations />} />
        <Route path="/vapor-lounge" element={<VaporLounge />} />  
        <Route path="/portfolio" element={<Portfolio />} />  
        <Route path="/contact" element={<Contact />} />              
        <Route path="/bio" element={<Bio />} />     
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
