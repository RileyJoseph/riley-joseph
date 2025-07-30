import React, { useState } from 'react';

function Contact() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDownload = () => {
    if (password === 'resumeplease') { // Replace with actual password logic
      setError(null);
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resumse.pdf";
      link.click();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center app-body contact-me">
      <div className="overlay"></div>
      <div className={`overlay glitch`}></div>    
      <div className='contact'>
        <h1 className="title text-4xl font-bold mb-8 font-bold">CONTACT ME</h1>
        <div className="w-full max-w-3xl bg-black shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg">Feel free to reach out to me via the following channels:</p>
          <div className="mt-4 space-y-2">
            <a href="https://www.linkedin.com/in/rileymjoseph/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline linkedIn">
              LinkedIn
            </a>
            <p><a href="mailto:riley.m.joseph1@gmail.com" className="hover:underline">riley.m.joseph1@gmail.com</a></p>
          </div>
        </div>

        <div className="w-full max-w-3xl bg-black shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Download Resume</h2>
          <input
            type="password"
            placeholder="Enter password to download"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded mb-2 w-full"
          />
          <button
            onClick={handleDownload}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Download Resume
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>  
    </div>
  );
}

export default Contact;
