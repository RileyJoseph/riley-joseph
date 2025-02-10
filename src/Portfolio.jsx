import React from "react";

const portfolioItems = [  
  { id: 1, name: "Orange Leaf", image: "/images/portfolio/orange-leaf.png" },
  { id: 2, name: "Eote", image: "/images/portfolio/eote.png" },
  { id: 3, name: "Huble Donutes", image: "/images/portfolio/humble.png" },    
  { id: 4, name: "Armstrong Auditorium", image: "/images/portfolio/armstrong.png" },
  { id: 5, name: "Solas", image: "/images/portfolio/solas-1.png" },
  { id: 6, name: "Chisholm Creek", image: "/images/portfolio/ccreek.png" },
  { id: 7, name: "OKC MoA", image: "/images/portfolio/moa.png" },
  { id: 8, name: "guernsey", image: "/images/portfolio/guernsey.png" },
  { id: 9, name: "Life Church", image: "/images/portfolio/open-lc.png" },
  { id: 10, name: "Coat", image: "/images/portfolio/coat.png" },
  { id: 11, name: "First Med", image: "/images/portfolio/firstmed.png" },
  { id: 12, name: "CBMC", image: "/images/portfolio/cbmc.png" },
  { id: 13, name: "Ponca City", image: "/images/portfolio/ponca.png" },
  { id: 14, name: "Take Heart", image: "/images/portfolio/take-heart.png" },
  { id: 15, name: "America Prays", image: "/images/portfolio/america-prays.png" },
  { id: 16, name: "Stars and Stripes Coffee", image: "/images/portfolio/sscoffee.png" },
  { id: 13, name: "Patted", image: "/images/portfolio/patted.png" },
];

const sassPortfolioItems = [  
  { id: 1, name: "Frontera Software", image: "/images/portfolio/frontera.png" },
  { id: 2, name: "Lennections", image: "/images/portfolio/lennections.png" },
];

const Portfolio = () => {
  return (
<div className="min-h-screen flex flex-col justify-center items-center p-6 portfolio">
  <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>

  <h2>SaaS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
    {sassPortfolioItems.map((item) => (
      <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img 
          src={item.image} 
          alt={item.name} 
          className="client object-cover object-top w-full h-60 object-cover transition duration-300 group-hover:brightness-50"
        />        
        <div className="title-overlay title-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-60 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="text-white text-2xl font-semibold">
            {item.name}
          </h2>
        </div>
      </div>
    ))}
  </div>

  <h2>Web Development</h2>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {portfolioItems.map((item) => (
      <div key={item.id}  className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img 
          src={item.image} 
          alt={item.name} 
          className="client object-cover object-top w-full h-60 object-cover transition duration-300 group-hover:brightness-50"
        />
        
        <div className="title-overlay title-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h2 className="text-white text-2xl font-semibold">
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
