import React, { useState, useEffect } from "react";
import axios from "axios";

const VaporLounge = () => {
  const [bgColor, setBgColor] = useState("bg-white");
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8888/.netlify/functions/api" 
    : "/.netlify/functions/api";   
  // const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
  
      const data = await response.json();
      setMessages([...newMessages, { sender: "bot", text: data.message }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { sender: "bot", text: "Error occurred." }]);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-body vapor-lounge flex flex-col items-center justify-center min-h-screen">
      <div className="overlay"></div>
      <div className={`overlay glitch ${bgColor}`}></div>

      {isLoading ? (
        <img
          src="/images/loading.gif" 
          alt="Loading..."
          className="w-64 h-64 mb-4"
        />
      ) : (
        <>
          <iframe
            style={{ borderRadius: "12px", zIndex: "1000" }}
            src="https://open.spotify.com/embed/playlist/24sBhs7bDTJEJIJEmj4DP6?utm_source=generator"
            width="50%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
            className="spotify"
          ></iframe>

          <div className="chatbox border p-4 rounded-lg shadow-lg w-96 bg-white mt-4" style={{  zIndex: "1000" }}>
            <h2 className="text-black">Chat With a Pirate</h2>
            <div className="messages h-60 overflow-y-auto p-2 border-b">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 my-1 rounded-md ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end ml-auto text-right"
                      : "bg-gray-700 text-gray-200 self-start mr-auto text-left"
                  }`}>{msg.text}</div>
              ))}
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                className="flex-grow border border-gray-600 p-2 bg-gray-800 text-white rounded-l-md placeholder-gray-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-all">Send</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VaporLounge;
