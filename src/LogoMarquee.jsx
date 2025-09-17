import React from "react";
import "./LogoMarquee.css"; 

const LOGOS = [
  { name: "Devon", color: "#5b8ef1", src: "/images/logos/devon.png" },
  { name: "mckenzie", color: "#ef476f", src: "/images/logos/mckenzie.png" },
  { name: "Eote", color: "#f15bb5", src: "/images/logos/eote.png" },
  { name: "OU Med", color: "#ff9f1c", src: "/images/logos/ou_med2.png" },
  { name: "Pulse", color: "#06d6a0", src: "/images/logos/mls.png" },
  { name: "Sonic", color: "#6a4c93", src: "/images/logos/sonic.svg" },
  { name: "Orange Leaf", color: "#2ec4b6", src: "/images/logos/OrangeLeaf.png" },
  { name: "Thunder", color: "#00afb9", src: "/images/logos/thunder.png" },
];

export default function LogoMarquee({ speed = 18 }) {
  const wrapRef = React.useRef(null);
  const [repeat, setRepeat] = React.useState(1);

  // helper to read a CSS var as number of px
  const getVarPx = (el, name, fallback) => {
    const read = (node) => {
      const v = getComputedStyle(node).getPropertyValue(name).trim();
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : undefined;
    };
    return read(el) ?? read(document.documentElement) ?? fallback;
  };

  React.useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const compute = () => {
      const logoW = getVarPx(el, "--logo-w", 120);
      const gap   = getVarPx(el, "--logo-gap", 56);
      const containerW = el.clientWidth || 0;
      const baseW = LOGOS.length * logoW + (LOGOS.length - 1) * gap;

      let needed = 1;
      if (containerW > 0 && baseW > 0) {
        needed = Math.ceil(containerW / baseW);
      }
      needed = Math.min(Math.max(1, needed), 20);

      setRepeat((prev) => (prev === needed ? prev : needed));
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const sequence = React.useMemo(
    () => Array.from({ length: repeat }, () => LOGOS).flat(),
    [repeat]
  );
  const items = React.useMemo(() => [...sequence, ...sequence], [sequence]);

  return (
    <section className="marquee-section">
      {/* <h3>I've Helped</h3> */}
      <div
        ref={wrapRef}
        className="logo-marquee"
        aria-label="Featured partners"
        style={{ "--marquee-speed": `${speed}s` }}
      >
        <div className="logo-track">
          {items.map((l, i) => (
            <a className="logo-item" href="#" key={`${l.name}-${i}`} aria-label={l.name}>
              <img className="logo-img" src={l.src} alt={`${l.name} logo`} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}