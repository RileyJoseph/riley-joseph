import React, { useState } from "react";

const Footer = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleDownload = () => {
    const correctPassword = "resumeplease";

    if (password === correctPassword) {
      setError(null);
      const link = document.createElement("a");
      link.href = "/public/resume.pdf";
      link.download = "resumse.pdf";
      link.click();
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
<footer className="bg-black text-white py-10 pulse-border">
  <div className="footer-content container mx-auto flex md:flex-row justify-between px-4 py-8">
    <div className="footer-details w-full flex flex-col px-8 w-1/4 md:w-2/4 sm:w-full">
      <div className="footer-logos procon text-left">
        <h2>Big Project?</h2>
        <hr />
        <p>I can solve most of your coding problems but sometimes you want the full team at your back. Proper Conduct is a all-purpose agency that offers branding, marketing, security, AI integration and more.</p>      
        {/* <hr /> */}
        <a href="https://www.properconduct.com/" target="_blank"  className=" inline-block pt-2">
          <img src="/images/procon-white.png" alt="" />
        </a>  
        <p></p>
        </div>
      {/* <div className="footer-logos coat mt-8">
        <p>Check out some music</p>      
        <a href="https://music.apple.com/us/artist/coat/1670318082" target="_blank" className="inline-block">
          <img src="/images/coat-retro-logo2.png" alt="" />
        </a>
      </div>       */}
    </div>
    <div className="footer-details flex flex-col md:flex-row justify-between w-1/4 md:w-2/4 sm:w-full">
      <div className="w-full text-left">
        <p className="text-xl font-bold footer-heading pink">GET IN TOUCH</p>
        <a href="https://www.linkedin.com/in/rileymjoseph/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-400 hover:underline text-white underline">
          LinkedIn
        </a><br />
        <a href="mailto:riley.m.joseph1@gmail.com" className="hover:underline">Email Me</a>
        <br />
        {/* <a href="https://www.instagram.com/r.m.joseph" target="_blank">    
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="https://github.com/RileyJoseph" target="_blank">    
          <ion-icon name="logo-github"></ion-icon>
        </a>                 */}
      </div>

      <div className="text-left w-1/4 md:w-2/4 sm:w-full">
        <p className="text-xl font-bold footer-heading pink">PAGES</p>
        <ul className="text-sm space-y-1 ">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="/bio" className="hover:underline">About Me</a></li>       
          <li><a href="/contact" className="hover:underline">Contact</a></li>          
        </ul>
      </div>
    </div>

    <div className="footer-resume flex flex-col items-start md:items-end mt-6 md:mt-0 inline-block text-left w-1/4 md:w-2/4 sm:w-full">
      <p className="text-xl font-bold footer-heading text-center">Resume With Password</p>
      <p className="text-center text-sm">Password upon request.</p>
      <div className="pt-4">
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border text-black border-white text-white w-full text-center"
        />
        <br />
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-white text-black hover:bg-blue-600 w-full">
          Download Resume
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}

      </div>
    </div>

  </div>

  <div className="container mx-auto px-8">
    <div className="footer-details w-full flex justify-end items-center space-x-4">
      <a href="https://www.instagram.com/r.m.joseph" target="_blank" className="text-white text-xl">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      <a href="https://github.com/RileyJoseph" target="_blank" className="text-white text-xl">
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </div>
  </div>




</footer>


  );
};

export default Footer;
