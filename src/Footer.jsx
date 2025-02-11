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
  <div className="container mx-auto flex flex-col md:flex-row justify-between px-8">

    <div className="footer-details w-full md:w-2/3 flex flex-col md:flex-row justify-between">
      
      <div className="w-full md:w-1/3 text-left">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <a href="https://www.linkedin.com/in/rileymjoseph/" 
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-blue-400 hover:underline text-white underline">
          LinkedIn
        </a><br />
        <a href="mailto:riley.m.joseph1@gmail.com" className="hover:underline">riley.m.joseph1@gmail.com</a>
      </div>


      <div className="w-full md:w-1/3 text-left">
        <h2 className="text-xl font-semibold underline">Pages</h2>
        <ul className="text-sm text-gray-400 space-y-1 ">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
          <li><a href="/bio" className="hover:underline">About Me</a></li>          
        </ul>
      </div>

    </div>

    <div className="footer-resume w-full md:w-2/3 flex flex-col items-start md:items-end mt-6 md:mt-0 inline-block text-right">
      <h2 className="text-xl font-semibold">Get Resume</h2>
      <input
        type="password"
        placeholder="Enter password to download"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="px-4 py-2 border rounded mb-2 text-black border-white text-white"
      />
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-white text-black rounded hover:bg-blue-600">
        Download Resume
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>

  </div>
</footer>


  );
};

export default Footer;
