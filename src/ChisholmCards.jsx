import React, { useState } from "react";

const ITEMS = [
  {
    title: "Chisholm Creek",
    sub: "Entertainment District",
    bg: "url(/images/portfolio/ccreek2.png)",
    icon: "ellipse-outline",
  },
  {
    title: "Chisholm Creek",
    sub: "Events and Calendar",
    bg: "url(/images/portfolio/ccreek5.png)",
    icon: "calendar-outline",
  },  
  {
    title: "Chisholm Creek",
    sub: "Residential Listings",
    bg: "url(/images/portfolio/ccreek3.png)",    
    icon: "pulse-outline",
  },
  {
    title: "Chisholm Creek",
    sub: "CTAs",
    bg: "url(/images/portfolio/ccreek4.png)",
    icon: "information-circle-outline",
  },
  {
    title: "Chisholm Creek",
    sub: "Footer",
    bg: "url(/images/portfolio/ccreek6.png)",
    icon: "footsteps-outline",
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
            key={it.title}
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