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
  {/* full top footer */}
  <div className="footer-content container mx-auto flex flex-col md:flex-row justify-between py-8">
  
    {/* Left Half: Procon */}
    <div className="footer-details w-full md:w-1/2 flex flex-col px-4 md:px-8 sm:px-4">
      <div className="footer-logos procon text-left">
        <h2>Big Project?</h2>
        <p className="md:pr-8 font-semibold">
          While I can solve most of your coding problems, sometimes you want the full team at your back. 
          Proper Conduct is an all-purpose agency that offers branding, marketing, security, AI integration and more.
        </p>      
        <a href="https://www.properconduct.com/" target="_blank" className="inline-block pt-2 procon-logo">
          <img src="/images/procon-white.png" alt="Proper Conduct Logo" />
        </a>  
      </div>
    </div>

    {/* Right Half: Pages + Resume */}
    <div className="footer-details w-full md:w-1/2 flex flex-col md:flex-row px-4 mt-8 md:mt-0 right-half ">
    
      {/* Pages Section */}
      <div className="text-left w-full md:w-1/2 mx-auto">
        <p className="text-xl font-bold footer-heading">PAGES</p>
        <ul className="text-sm space-y-1">
          <li className="pt-2"><a href="/" className="hover:underline ">Home</a></li>
          <li className="pt-2"><a href="/bio" className="hover:underline ">About Me</a></li>       
          <li className="pt-2"><a href="/portfolio" className="hover:underline ">Dev Portfolio</a></li>
          <li className="pt-2"><a href="/https://coattheband.bandcamp.com/" className="hover:underline ">Music</a></li>      
          <li className="pt-2"><a href="/contact" className="hover:underline ">Contact</a></li>          
        </ul>
      </div>

      {/* Resume Section */}
      <div className="footer-resume flex flex-col w-full md:w-1/2 text-left">
        <p className="text-xl font-bold footer-heading md:text-left sm:text-left sm:pt-8 pt-8 md:pt-0">Resume With Password</p>
        <p className="text-sm md:text-left sm:text-left">Password upon request.</p>

        <div className="pt-4 w-full max-w-sm">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-white bg-black text-white w-full text-center"
          />
          <br />
          <button
            onClick={handleDownload}
            className="px-4 py-2 mt-2 bg-white text-black hover:bg-blue-600 w-full resume-download">
            Download
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>

    </div>
  </div>

  {/* bottom footer */}
  <div className="footer-content container mx-auto flex flex-col md:flex-row justify-between py-8">
    <div className="footer-details w-full flex justify-end items-center space-x-4 ">
      <a href="https://www.instagram.com/r.m.joseph" target="_blank" className="text-white text-xl">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
      <a href="https://github.com/RileyJoseph" target="_blank" className="text-white text-xl">
        <ion-icon name="logo-github"></ion-icon>
      </a>
      <a href="https://www.linkedin.com/in/rileymjoseph/" target="_blank" className="text-white text-xl">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>      
    </div>
  </div>

</footer>


  );
};

export default Footer;
