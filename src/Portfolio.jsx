import React from "react";

const portfolioItems = [  
  { id: 1, name: "Orange Leaf", image: "/images/portfolio/orange-leaf.png" },
  { id: 2, name: "Eote", image: "/images/portfolio/eote.png" },
  { id: 3, name: "Huble Donutes", image: "/images/portfolio/humble.png" },  
  { id: 4, name: "Patted", image: "/images/portfolio/patted.png" },
  { id: 5, name: "Solas", image: "/images/portfolio/solas-1.png" },
  { id: 6, name: "Coat", image: "/images/portfolio/coat.png" },
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
