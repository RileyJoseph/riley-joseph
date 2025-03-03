import React from "react";
import { useParams, Link } from "react-router-dom";

const portfolioItems = [  
  { id: 1, name: "Orange Leaf", url:"orange-leaf", imageHero: "/images/portfolio/orange-leaf.jpg", description: "Project details for Orange Leaf.", imageTwo:"/images/portfolio/orangeleaf1.png" },
  { id: 2, name: "Eote", url:"eote", imageHero: "/images/portfolio/eote.jpg", description: "Project details for Eote.", imageTwo:"/images/portfolio/" },
  { id: 3, name: "Huble Donuts", url:"humble-donuts", imageHero: "/images/portfolio/humble.jpg", description: "Project details for Huble Donutes.", imageTwo:"/images/portfolio/" },    
  { id: 4, name: "Armstrong Auditorium", url:"armstrong-auditorium", imageHero: "/images/portfolio/armstrong.jpg", description: "Project details for Armstrong Auditorium.", imageTwo:"/images/portfolio/" },
  { id: 5, name: "Solas", url:"solas", imageHero: "/images/portfolio/solas-1.jpg", description: "Project details for Solas.", imageTwo:"/images/portfolio/" },
  { id: 6, name: "Chisholm Creek", url:"chisholm-creek", imageHero: "/images/portfolio/ccreek.jpg", description: "Project details for Chisholm Creek.", imageTwo:"/images/portfolio/" },
  { id: 7, name: "OKC MoA", url:"okc-moa", imageHero: "/images/portfolio/moa.jpg", description: "Project details for OKC MoA.", imageTwo:"/images/portfolio/" },
  { id: 8, name: "guernsey", url:"guernsey", imageHero: "/images/portfolio/guernsey.jpg", description: "Project details for Guernsey.", imageTwo:"/images/portfolio/" },
  { id: 9, name: "Life Church", url:"life-church", imageHero: "/images/portfolio/open-lc.jpg", description: "Project details for Life Church.", imageTwo:"/images/portfolio/" },
  { id: 10, name: "Coat", url:"coat", imageHero: "/images/portfolio/coat.jpg", description: "Project details for Coat.", imageTwo:"/images/portfolio/" },
  { id: 11, name: "First Med", url:"first-med", imageHero: "/images/portfolio/firstmed.jpg", description: "Project details for First Med.", imageTwo:"/images/portfolio/" },
  { id: 12, name: "CBMC", url:"cbmc", imageHero: "/images/portfolio/cbmc.jpg", description: "Project details for CBMC.", imageTwo:"/images/portfolio/" },
  { id: 13, name: "Ponca City", url:"ponca-city", imageHero: "/images/portfolio/ponca.jpg", description: "Project details for Ponca City.", imageTwo:"/images/portfolio/" },
  { id: 14, name: "Take Heart", url:"take-heart", imageHero: "/images/portfolio/take-heart.jpg", description: "Project details for Take Heart.", imageTwo:"/images/portfolio/" },
  { id: 15, name: "America Prays", url:"america-prays", imageHero: "/images/portfolio/america-prays.jpg", description: "Project details for America Prays.", imageTwo:"/images/portfolio/" },
  { id: 16, name: "Stars and Stripes Coffee", url:"stars-and-stripes-coffee", imageHero: "/images/portfolio/sscoffee.jpg", description: "Project details for Stars and Stripes Coffee.", imageTwo:"/images/portfolio/" },
  { id: 17, name: "Patted", url:"patted", imageHero: "/images/portfolio/patted.jpg", description: "Project details for Patted.", imageTwo:"/images/portfolio/" },
  { id: 18, name: "Platformer", url:"platformer", imageHero: "/images/portfolio/kill-bill.jpg", src: "https://project-manager-curve-50566.netlify.app/", description: "Project details for Platformer.", imageTwo:"" },
  { id: 19, name: "Frontera Software", url:"frontera-software", imageHero: "/images/portfolio/frontera.jpg", imageTwo:"/images/portfolio/frontera-2.jpg", 
    description: "For two years using Vue.js, MongoDB, Meteor, Node.js, Docker, AWS, and Stripe, I worked on engineering, building, and maintaining software that managed union members. Including over 15 'locals' with hundreds of thousands of members and many more records. I developed new features and enhancements, implemented stripe payment system." 
  },
  { id: 20, name: "Lennections", url:"lennections", imageHero: "/images/portfolio/lennections.jpg", 
    description: "For two years I worked as a software engineer, technology manager and team lead for Lennections Inc. Using Meteor, MongoDB, Blaze.js, Node.js, OpenAI GPT-4 API, PIE Frameworks, AWS and other frontend tools to develop and improve their software. These responsibilities included developing new features and enhancements for the current codebase, introducing new libraries, technology and systems to the application, updating packages, databases, and other software versions, database management, fixing bugs, communicating with clients, supporting and maintaining the application, managing small team of developers including setting tasks, helping grow their coding skills and code reviews.", 
    imageTwo:"/images/portfolio/lennections1.png" 
  },  
];

const ProjectDetails = () => {
  const { url } = useParams();
  const project = portfolioItems.find((item) => item.url === url);

  if (!project) return <h2 className="text-center text-3xl mt-10">Project not found</h2>;

  return (
    <div className="min-h-screen flex flex-col">

      <div className="relative w-full h-96 bg-black">
        <img 
          src={project.imageHero} 
          alt={project.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          {project.name}
        </h1>
      </div>

      <div className="p-6 mx-auto flex flex-col md:flex-row items-center gap-6">
        <img 
          src={project.imageTwo} 
          alt={project.name} 
          className="w-full md:w-1/2 rounded-lg shadow-lg" 
        />
        <p className="text-lg md:w-1/2">{project.description}</p>
      </div>

      <div className="text-center mt-6 pb-16">
        <Link to="/portfolio" className="text-black p-4 bg-white rounded-2xl">Back to Portfolio</Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
