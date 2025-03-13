import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const portfolioItems = [  
  { id: 1, name: "Orange Leaf", url:"orange-leaf", image: "/images/portfolio/orange-leaf.jpg", description: "Project details for Orange Leaf." },
  { id: 2, name: "Eote", url:"eote", image: "/images/portfolio/eote.jpg", description: "Project details for Eote." },
  { id: 3, name: "Huble Donuts", url:"humble-donuts", image: "/images/portfolio/humble.jpg", description: "Project details for Huble Donutes." },    
  { id: 4, name: "Armstrong Auditorium", url:"armstrong-auditorium", image: "/images/portfolio/armstrong.jpg", description: "Project details for Armstrong Auditorium." },
  { id: 5, name: "Solas", url:"solas", image: "/images/portfolio/solas-1.jpg", description: "Project details for Solas." },
  { id: 6, name: "Chisholm Creek", url:"chisholm-creek", image: "/images/portfolio/ccreek.jpg", description: "Project details for Chisholm Creek." },
  { id: 7, name: "OKC MoA", url:"okc-moa", image: "/images/portfolio/moa.jpg", description: "Project details for OKC MoA." },
  { id: 8, name: "guernsey", url:"guernsey", image: "/images/portfolio/guernsey.jpg", description: "Project details for Guernsey." },
  { id: 9, name: "Life Church", url:"life-church", image: "/images/portfolio/open-lc.jpg", description: "Project details for Life Church." },
  { id: 10, name: "Coat", url:"coat", image: "/images/portfolio/coat.jpg", description: "Project details for Coat." },
  { id: 11, name: "First Med", url:"first-med", image: "/images/portfolio/firstmed.jpg", description: "Project details for First Med." },
  { id: 12, name: "CBMC", url:"cbmc", image: "/images/portfolio/cbmc.jpg", description: "Project details for CBMC." },
  { id: 13, name: "Ponca City", url:"ponca-city", image: "/images/portfolio/ponca.jpg", description: "Project details for Ponca City." },
  { id: 14, name: "Take Heart", url:"take-heart", image: "/images/portfolio/take-heart.jpg", description: "Project details for Take Heart." },
  { id: 15, name: "America Prays", url:"america-prays", image: "/images/portfolio/america-prays.jpg", description: "Project details for America Prays." },
  { id: 16, name: "Stars and Stripes Coffee", url:"stars-and-stripes-coffee", image: "/images/portfolio/sscoffee.jpg", description: "Project details for Stars and Stripes Coffee." },
  { id: 17, name: "Catholic Charities", url:"catholic-charities", image: "/images/portfolio/cc.jpg", description: "Project details for CC" },
  { id: 18, name: "Patted", url:"patted", image: "/images/portfolio/patted.jpg", description: "Project details for Patted." },
  // { id: 19, name: "Platformer", url:"platformer", outUrl:"https://project-manager-curve-50566.netlify.app/", image: "/images/portfolio/kill-bill.jpg", description: "Project details for Platformer." },
];

const sassPortfolioItems = [  
  { id: 1, name: "Frontera Software", url:"frontera-software", image: "/images/portfolio/frontera.jpg", description: "Project details for Frontera Software." },
  { id: 2, name: "Lennections", url:"lennections", image: "/images/portfolio/lennections.jpg", description: "Project details for Lennections." },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 portfolio all">
      <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>
      <h2>SaaS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {sassPortfolioItems.map((item) => (
          <Link key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer project">
            <img src={item.image} alt={item.name} className="client object-cover object-top w-full h-60 transition duration-300 group-hover:brightness-50" />
            <div className="title-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-60 md:opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h2 className="text-white text-2xl font-semibold">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <h2>Full-Stack Development</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg  project">
            <img src={item.image} alt={item.name} className="client object-cover object-top w-full h-60" />
            <div className="title-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-75">
              <h2 className="text-white text-2xl font-semibold">{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <h2>For Fun</h2>
      <a
        key="platformer"
        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer project col-span-full platformer"
        target="_blank"
        href="https://project-manager-curve-50566.netlify.app/"
        rel="noopener noreferrer"
      >

        {/* <img src="/" alt="Platformer" className="client object-cover object-top w-full h-80 md:h-96" /> */}
        <div className="title-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-70">
          <h2 className="text-white text-3xl font-semibold">Play My Platformer</h2>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
