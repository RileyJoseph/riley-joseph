import React from "react";
import "./Icons.css"

const ICONS = [
  { name: "HTML", color: "#00afb9", src: "/images/icons/html.png" },
  { name: "CSS3", color: "#00afb9", src: "/images/icons/css.png" },
  { name: "Angular", color: "#00afb9", src: "/images/icons/angular.png" },
  { name: "React", color: "#00afb9", src: "/images/icons/react.png" },
  { name: "Vue", color: "#00afb9", src: "/images/icons/vue.png" },
  { name: "TypeScript", color: "#00afb9", src: "/images/icons/typescript.png" },
  { name: "Node", color: "#00afb9", src: "/images/icons/node.png" },
  { name: "PostCss", color: "#2ec4b6", src: "/images/icons/postcss.png" },
  { name: "Tailwind", color: "#00afb9", src: "/images/icons/tailwind.png" },
  { name: "Boostrap", color: "#00afb9", src: "/images/icons/bootstrap.png" },
  { name: "Sass", color: "#00afb9", src: "/images/icons/sass.png" },

  { name: "Meteor", color: "#00afb9", src: "/images/icons/meteor.png" },
  { name: "MongoDb", color: "#00afb9", src: "/images/icons/mongodb.png" },
  { name: "MySQL", color: "#00afb9", src: "/images/icons/mysql.png" },
  { name: "PostgreSQL", color: "#00afb9", src: "/images/icons/postgresql.png" },
  { name: "Wordpress", color: "#00afb9", src: "/images/icons/wordpress.png" },  
  { name: "Craft CMS", color: "#00afb9", src: "/images/icons/craftcms.png" },  
  { name: "Shopify", color: "#00afb9", src: "/images/icons/shopify_white.png" },  
  { name: "Squarespace", color: "#00afb9", src: "/images/icons/squarespace-white.png" },  
  { name: "Webflow", color: "#00afb9", src: "/images/icons/webflow.png" },  
  { name: "Wix", color: "#00afb9", src: "/images/icons/wix_white.png" },  

  { name: "AWS", color: "#00afb9", src: "/images/icons/aws.png" },  
  { name: "Docker", color: "#00afb9", src: "/images/icons/docker.png" },  
  { name: "Digital Ocean", color: "#00afb9", src: "/images/icons/digitalocean.png" },  
  { name: "Heroku", color: "#00afb9", src: "/images/icons/heroku.png" },  
  { name: "Linode", color: "#00afb9", src: "/images/icons/linode.png" },  
  { name: "NPM", color: "#00afb9", src: "/images/icons/npm.png" },  
  { name: "Figma", color: "#5b8ef1", src: "/images/icons/figma.png" },
  { name: "Illustrator", color: "#ef476f", src: "/images/icons/illustrator.png" },
  { name: "Lightroom", color: "#f15bb5", src: "/images/icons/lightroom.png" },
  { name: "Photoshop", color: "#ff9f1c", src: "/images/icons/photoshop.png" },
  { name: "XD", color: "#6a4c93", src: "/images/icons/xd.png" },  
  { name: "Procreate", color: "#06d6a0", src: "/images/icons/procreate.png" },
];

export default function TechnologyIcons() {
  return (
    <div className="icons">
        <div className="tech-icons">
          <ul className="icon-row md:justify-end justify-center p-8">
          {ICONS.map((l, i) => (
            <li className="icon-cell pt-8" key={`${l.name}-${i}`}>
              <a className="icon-item" href="#" aria-label={l.name} title={l.name}>
                <img className="logo-img" src={l.src} alt={`${l.name} logo`} loading="lazy" decoding="async" />
              </a>
            </li>
          ))}
          </ul>
        </div>        
    </div>
  )
}