import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookRecommendations from './BookRecommendations'; 
import './App.css'; 
import Navigation from './Navigation.jsx';
import VaporLounge from "./VaporLounge";
import GameMirror from './windows/GameWindow.jsx';
import LibraryWindow from './windows/LibraryWindow.jsx'
import LoungeWindow from './windows/LoungeWindow.jsx'
import ProjectDetails from "./ProjectDetails";
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [bgColor, setBgColor] = useState("bg-white");
  const [greeting, setGreeting] = useState("Hey, nice to meet you.")

  useEffect(() => {
    // Select a random greeting when the component mounts
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <div className='all'>
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
                      <span>Software Engineer ● Web Developer <span className="dot inline-only">●</span></span>
                      
                      <span>Musician ● Photographer</span>
                    </span>
                    
                    <h2 className='subheading text-right md:w-2/4'>{greeting}</h2>
                  </div>
                  <div className='md:w-3/4 code'>
                    {/* Frontend Development (Blue) */}
                    <span className="code-blue">HTML</span> <span className="dot">●</span> 
                    <span className="code-blue">CSS</span> <span className="dot">●</span> 
                    <span className="code-blue">SCSS</span> <span className="dot">●</span> 
                    <span className="code-blue">Tailwind</span> <span className="dot">●</span> 
                    <span className="code-blue">UX</span> <span className="dot">●</span> 
                    <span className="code-blue">UI</span> <span className="dot">●</span> 

                    {/* JavaScript & Backend (Red) */}
                    <span className="code-red">JavaScript</span> <span className="dot">●</span> 
                    <span className="code-red">Node.js</span> <span className="dot">●</span> 
                    <span className="code-red">TypeScript</span> <span className="dot">●</span>
                    <span className="code-red">Express</span> <span className="dot">●</span>
                    <span className="code-red">PHP</span> <span className="dot">●</span>

                    {/* JavaScript Frameworks (Purple) */}
                    <span className="code-purple">Vue</span> <span className="dot">●</span> 
                    <span className="code-purple">React</span> <span className="dot">●</span> 
                    <span className="code-purple">Angular</span> <span className="dot">●</span> 
                    <span className="code-purple">Meteor</span> <span className="dot">●</span> 
                    <span className="code-purple">Blaze</span> <span className="dot">●</span> 

                    {/* Databases (Yellow) */}
                    <span className="code-yellow">MongoDB</span> <span className="dot">●</span> 
                    <span className="code-yellow">PostgreSQL</span> <span className="dot">●</span> 
                    <span className="code-yellow">MySQL</span> <span className="dot">●</span> 

                    {/* CMS & Website Builders (Green) */}
                    <span className="code-green">Craft</span> <span className="dot">●</span> 
                    <span className="code-green">WordPress</span> <span className="dot">●</span> 
                    <span className="code-green">Shopify</span> <span className="dot">●</span> 
                    <span className="code-green">WIX</span> <span className="dot">●</span> 
                    <span className="code-green">Webflow</span> <span className="dot">●</span> 
                    <span className="code-green">Squarespace</span> <span className="dot">●</span> 

                    {/* DevOps & Tools (Blue) */}
                    <span className="code-blue">Git</span> <span className="dot">●</span> 
                    <span className="code-blue">NPM</span> <span className="dot">●</span>                                         
                    <span className="code-blue">AWS</span> <span className="dot">●</span> 
                    <span className="code-blue">Docker</span> <span className="dot">●</span> 
                    <span className="code-blue">Gulp</span> <span className="dot">●</span> 
                    <span className="code-blue">Yarn</span> <span className="dot">●</span> 
                    <span className="code-blue">APIs</span> <span className="dot">●</span> 

                    {/* Project & Team Management (Green) */}
                    <span className="code-green">Team Management</span> <span className="dot">●</span> 
                    <span className="code-green">Client Communication</span> <span className="dot">●</span> 
                    <span className="code-green">Database Management</span> <span className="dot">●</span> 
                    <span className="code-green">JIRA</span> <span className="dot">●</span> 

                  </div>

                </div>
                <div className="links absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl flex justify-between items-center px-8">
                  <Link to="/portfolio" className="hero-links px-6 py-3 text-white transition duration-300 hover:bg-gray-600">
                    Portfolio
                  </Link>
                  <Link to="/bio" className="hero-links px-6 py-3 text-white transition duration-300 hover:bg-gray-600">
                    About Me
                  </Link>
                </div>
                                          
                  <Link 
                    to="/contact" 
                    className="fixed right-10 top-1/2 -translate-y-1/2 transform-gpu hire-me-btn bg-white text-black px-6 py-11 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-300"
                  >
                    Hire Me
                  </Link>

              </div>

            </div>

          }
        />
        <Route path="/book-recommendations" element={<BookRecommendations />} />
        <Route path="/vapor-lounge" element={<VaporLounge />} />  
        <Route path="/portfolio" element={<Portfolio />} />  
        <Route path="/contact" element={<Contact />} />              
        <Route path="/bio" element={<Bio />} />     
        <Route path="/portfolio/:url" element={<ProjectDetails />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
