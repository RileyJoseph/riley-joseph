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
  { id: 8, name: "Guernsey", url:"guernsey", image: "/images/portfolio/guernsey.jpg", description: "Project details for Guernsey." },
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
  { id: 1, name: "Lennections", url:"lennections", image: "/images/portfolio/LennectionsIconRed.png", description: "Engineer, technology manager and team lead in the education sector overseeing full-stack development, AI integration, and team coordination. RBAC, dynamic report generation, spreadsheet data ingestion and parsing, and scalable database management.", technology: "HTML5, CSS3, SCSS, Meteor, MongoDB, Blaze.js, Node.js, Javascript, AWS (EC2, S3, CloudFront), OpenAI GPT-4 API, AI, ML, JIRA, PIE." },
  { id: 2, name: "Frontera", url:"frontera-software", image: "/images/portfolio/emma-logo.png", description: "Developed and maintained large-scale union management software serving hundreds of thousands of users, handling complex workflows for membership, payments, and filings. Built with a scalable architecture to ensure security, high availability, and seamless integration with payment and compliance systems.", technology: "Vue, HTML5, CSS3, SCSS, Javascript, Meteor, MongoDB, MongoDB Atlas, Node.js, Docker, AWS (EC2, S3, CloudFront), RDS, Lambda, Stripe, JIRA" },  
];

const Portfolio = () => {
  return (
    <div className="relative min-h-screen items-center p-6 portfolio all w-full">
    <div className="overlay"></div>
    <div className={`overlay glitch`}></div>   
    <div className="portfolio-container">
      <h1 className="text-3xl font-bold text-center mb-18 pulse-border-bottom">Dev Portfolio</h1>
      {/* <h2>SaaS</h2> */}
      <div className="flex flex-col">
        {sassPortfolioItems.map((item) => (
          <article key={item.id} className="flex flex-col md:flex-row pb-10">
            <div className="relative group overflow-hidden sass md:w-1/3 w-full flex mr-4 flex-col justify-center">
            {/* <div className="relative group overflow-hidden sass w-1/3 flex mr-4 flex-col justify-center border border-white rounded-lg p-4 hover-pulse"> */}
              <img src={item.image} alt={item.name} className="client object-cover object-center mx-auto w-1/3 pb-4 hidden md:inline" />
              <div className="title-overlay flex items-center justify-center hidden md:inline">
                <h2 className="text-white text-xl font-semibold pb-0">{item.name}</h2>
              </div>
            </div>
            <div className="md:w-2/3 w-full p-4 md:ml-4 text-left border border-white rounded-lg hover-pulse flex md:flex-col flex-row justify-center relative">
            {/* <div className="md:w-2/3 w-full p-4 md:ml-4 text-left border border-white rounded-lg hover-pulse flex md:flex-col flex-row justify-center relative"></div> */}
            
                <img src={item.image} alt={item.name} className="client object-cover object-center mx-auto w-1/4 inline md:hidden height-120 inner-logo m-auto px-4 margin-inherit sm:my-auto" />
                <div className="flex-col w-3/4 md:w-full">
                  <h3 className="text-2xl font-bold">{item.name}</h3><span className="text-sm absolute top-5 right-5 font-bold invisible sm:visible md:visible">SaaS</span>
                  {/* <p className="subtitle text-sm text-bold py-4">{item.subtitle}</p> */}
                  <p className="text-sm">{item.description}</p>
                  <p className="text-sm mr-5 mt-4">{item.technology}</p>
                </div>
            </div>
          </article>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center my-12">Full-Stack Development</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg  project">
            <img src={item.image} alt={item.name} className="client object-cover object-top w-full h-60" />
            <div className="title-overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-75">
              <p className="text-white text-2xl font-semibold">{item.name}</p>
              {/* <p className="text-white text-2xl font-semibold">{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-center my-12">For Fun</h2>
      <a
        key="platformer"
        className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer project col-span-full platformer display-block"
        target="_blank"
        href="https://project-manager-curve-50566.netlify.app/"
        rel="noopener noreferrer"
      >
        {/* <img src="/" alt="Platformer" className="client object-cover object-top w-full h-80 md:h-96" /> */}
        <div className="title-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-70 md:opacity-0 transition-opacity duration-300 group-hover:opacity-70">
          <p className="text-white text-3xl font-semibold">Play My Platformer</p>
        </div>
      </a>
    </div> 
    </div>
  );
};

export default Portfolio;
