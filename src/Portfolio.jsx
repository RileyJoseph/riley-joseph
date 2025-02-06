import React from "react";

const portfolioItems = [  
  { id: 1, name: "Orange Leaf", image: "/images/orange-leaf.png" },
  { id: 2, name: "Eote", image: "/images/eote.png" },
  { id: 3, name: "Huble Donutes", image: "/images/humble.png" },  
  { id: 4, name: "Quantum Dynamics", image: "https://source.unsplash.com/600x400/?corporate" },
  { id: 5, name: "Eclipse Systems", image: "https://source.unsplash.com/600x400/?design" },
  { id: 6, name: "Titan AI", image: "https://source.unsplash.com/600x400/?software" },
];

const Portfolio = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            {/* Background Image */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-60 object-cover transition duration-300 group-hover:brightness-50"
            />
            
            {/* Overlay with Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold opacity-90 transition duration-300 group-hover:opacity-100">
                {item.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
