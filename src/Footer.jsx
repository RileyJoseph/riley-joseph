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
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <a
          href="https://www.linkedin.com/in/rileymjoseph/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>

        <div className="text-center">
          <input
            type="password"
            placeholder="Enter password to download resume"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded mb-2"
          />
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download Resume
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="text-center space-y-2">
          <a href="tel:+14058023368"  className="hover:underline">(405) 802-3368</a>
          <br />
          <a href="mailto:your.email@example.com" className="hover:underline">riley.m.joseph1@gmail.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
