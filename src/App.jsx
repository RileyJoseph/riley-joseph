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
import Photography from './Photography.jsx';
import PhotoDetail from './PhotoDetail';
import Music from './Music.jsx';
import Technology from './Technology.jsx';
import LogoMarquee from './LogoMarquee.jsx';

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
    <div className="flex flex-col min-h-screen">
    <Router>
      <ScrollToTop />
      <Navigation />
      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div className='all'>
                {/* <div className="app-body w-full h-[100vh] bg-cover bg-center bg-no-repeat md:relative absolute" style={{ backgroundImage: "url('/images/leaves.jpeg')" }}>               */}
                <div className="app-body min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative">              
                  <div className="overlay"></div>
                  {/* <div className="sun"></div> */}
                  <div className={`overlay glitch ${bgColor}`}></div>
                  
                  <div className="min-h-screen welcome-text flex flex-col items-center text-center lg:w-3/4">              
                    <div className='first-third'>
                      <h1 className="name text-2xl font-bold ml-auto mr-auto text-center spaceme">Riley Joseph</h1>
                      <div className="info flex justify-between w-full px-8 md:w-2/4">
                        <span className="left flex flex-col text-left jobs">                      
                          <span className="text-">Software Engineer <span className='dot'>●</span> Web Developer</span> <span className="mr-2 inline-only dot">●</span>
                          <span className="text-">Musician <span className='dot'>●</span> Photographer</span>
                        </span>
                        {/* <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="054629d7-56c4-4544-9460-33acd5351eb5" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>                     */}
                        <h2 className='subheading text-right md:w-2/4'>{greeting}</h2>
                      </div>
                    </div>
                    <div className='circle-headshot second-third pb-6'>
                      <img src="/images/closeup-bw.JPG" alt="Riley Joseph" className="headshot w-46 h-46 rounded-full mb-4 shadow-lg"/>
                    </div>
                    {/* <Technology /> */}
                    
                    <div className='home-icons flex flex-row md:gap-12 gap-4'>
                      <div>
                        <Link className='px-6 hover-pulse code-blue' to="/music"><ion-icon name="musical-notes-sharp"></ion-icon></Link>
                        <p>music</p>
                      </div>
                      <div>
                        <Link className='px-6 hover-pulse code-blue' to="/photography"><ion-icon name="camera-sharp"></ion-icon> </Link>
                        <p>photography</p>
                      </div>
                      <div>
                        <Link className='px-6 hover-pulse code-blue' to="/portfolio"><ion-icon name="code-slash-sharp"></ion-icon> </Link>                                                                    
                        <p>dev</p>
                      </div>
                        
                    </div>

                  </div>
                                            
                    <Link 
                      to="/contact" 
                      className="fixed right-10 top-1/2 -translate-y-1/2 transform-gpu hire-me-btn bg-white 
                      text-black px-6 py-11 rounded-full shadow-lg text-lg font-semibold hover:bg-gray-300"
                    >
                      Hire Me
                    </Link>

                </div>

                {/* <LogoMarquee speed={300} /> */}

              </div>

            }
          />
          <Route path="/book-recommendations" element={<BookRecommendations />} />
          <Route path="/vapor-lounge" element={<VaporLounge />} />  
          <Route path="/portfolio" element={<Portfolio />} />  
          <Route path="/contact" element={<Contact />} />              
          <Route path="/bio" element={<Bio />} />     
          <Route path="/photography" element={<Photography />} />     
          <Route path="/portfolio/:url" element={<ProjectDetails />} />
          <Route path="/photography/:slug" element={<PhotoDetail />} />
          <Route path="/music" element={<Music />} />     
          {/* <Route path="/portfolio/:url" element={<ProjectDetails />} /> */}
        </Routes>
      </div>
      <Footer /> 
    </Router>
    </div>
  );
}

export default App;
