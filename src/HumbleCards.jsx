import React, { useState } from "react";

const ITEMS = [
  {
    title: "Humble Donuts",
    sub: "Food & Beverage",
    bg: "url(/images/portfolio/humble.jpg)",
    icon: "ellipse-outline",
  },
  {
    title: "Humble Donuts",
    sub: "Wallpaper",
    bg: "url(/images/portfolio/humble2.jpg)",    
    icon: "brush-outline",
  },
  {
    title: "Humble Donuts",
    sub: "Franchise Info",
    bg: "url(/images/portfolio/humble4.png)",
    icon: "information-circle-outline",
  },
  {
    title: "Humble Donuts",
    sub: "Humble and Happy",
    bg: "url(/images/portfolio/humble.gif)",
    icon: "happy-outline",
  },
  {
    title: "Humble Donuts",
    sub: "Online Menu",
    bg: "url(/images/portfolio/humble3.jpg)",
    icon: "book-outline",
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