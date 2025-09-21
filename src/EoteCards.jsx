import React, { useState } from "react";

const ITEMS = [
  {
    title: "EÔTÉ Coffee",
    sub: "Shopfiy, eCommerce",
    bg: "url(/images/portfolio/eote.jpg)",
    icon: "cafe-outline",
  },
  {
    title: "EÔTÉ",
    sub: "Online Menu",
    bg: "url(/images/portfolio/eote5.png)",
    icon: "book-outline",
  },  
  {
    title: "EÔTÉ",
    sub: "Info block",
    bg: "url(/images/portfolio/eote2.png)",
    icon: "information-circle-outline",
  },
  {
    title: "EÔTÉ",
    sub: "Footer",
    bg: "url(/images/portfolio/eote3.png)",
    icon: "footsteps-outline",
  },
  {
    title: "EÔTÉ",
    sub: "Shop Options",
    bg: "url(/images/portfolio/eote4.png)",
    icon: "pricetags-outline",
  },

];

export default function PortfolioCards() {
  const [active, setActive] = useState(0);
  // $(".option").click(function(){
  //   $(".option").removeClass("active");
  //   $(this).addClass("active");
    
  // });

  return (

    <div className="cards">
      {/* wrapper expected by your CSS */}
      <div className="options">
        {ITEMS.map((it, i) => (
          <div
            key={it.bg}
            className={`option ${i === active ? "active" : ""}`}
            style={{ "--optionBackground": it.bg }}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActive(i);
            }}
          >
            <div className="shadow" />
            <div className="label">
              <div className="icon">
                <ion-icon name={it.icon}></ion-icon>
              </div>
              <div className="info">
                <div className="main">{it.title}</div>
                <div className="sub">{it.sub}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}