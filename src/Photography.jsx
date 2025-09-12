// Photography.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Photography() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const LINKS_ENABLED = false;

  function Link({ children, className = '', ...props }) {
    if (LINKS_ENABLED) {
      return <RouterLink className={className} {...props}>{children}</RouterLink>;
    }
    return (
      <span
        role="link"
        aria-disabled="true"
        tabIndex={-1}
        className={className + ' cursor-default'} // add 'opacity-60' if you want a visual cue
      >
        {children}
      </span>
    );
  }

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div className="min-h-screen p-8 flex flex-col app-body all">
      <div className="overlay"></div>
      <div className={`overlay glitch`}></div>

      <div id="photo-gallery" className="flex flex-col md:flex-row photo-gallery-top">
        <Link
          to="/photography/the-painter-1"
          className="relative group overflow-hidden sass md:w-1/3 w-full flex mr-4 flex-col justify-center"
        >
          <img
            className="gallery-img w-full md:w-full max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter object-cover"
            loading="lazy"
            alt="painter on church roof"
            src="/images/the-painter-1.jpg"
          />
        </Link>

        <div className="info flex-1 p-4 md:pl-16 text-center md:text-left">
          <h2 className="name font-bold">FILM</h2>
          <p className="subtitle py-4 font-semibold">The Gallery</p>
          <div className="bio-text">
            <p>
              This section of the site is under construction, more images will be added and later
              become available in high-resolution for purchase as prints.
            </p>
            <br />
            <p>Please reach out via email if you're interested in purchasing before then.</p>
            <br />
            <p>
              These shots are from all over the world - Athens, Seattle, Zion, NYC, Kissamos,
              Breckenridge, Paris, and of course, Oklahoma City.
            </p>
          </div>
        </div>
      </div>

      <div className="photo-gallery flex flex-wrap">
        <div className="gallery-img-container w-full md:w-2/3">
          <Link to="/photography/tv-truck" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover"
              loading="lazy"
              alt="truck with tv in windshield"
              src="/images/tv-truck.jpg"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-1/3">
          <Link to="/photography/bikers" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall"
              loading="lazy"
              alt="bikers on a ferry with seattle in the background"
              src="/images/bikers.jpg"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-1/3">
          <Link to="/photography/atv" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall"
              loading="lazy"
              alt="atv on a moutain"
              src="/images/atv.jpg"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-2/3 even">
          <Link to="/photography/ferry-shadows" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover"
              loading="lazy"
              alt="shadows cast by benches on a ferry"
              src="/images/ferry-shadows.jpg"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-2/3">
          <Link to="/photography/dolphins-unedited" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover"
              src="/images/dolphins-unedited.jpg"
              alt="blowup dolphins in a bin"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-1/3">
          <Link to="/photography/beach" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall"
              src="/images/beach.jpg"
              alt="lifeguard stand on a beach with a boat in the ocean in the background"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-1/3 even">
          <Link to="/photography/converse" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall"
              loading="lazy"
              alt="chickens pecking around a pair on converse shoes"
              src="/images/converse.jpg"
            />
          </Link>
        </div>

        <div className="gallery-img-container w-full md:w-2/3 even mb-14">
          <Link to="/photography/gasworks" className="block">
            <img
              className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover"
              loading="lazy"
              alt="old machinery covered in natural growth"
              src="/images/gasworks.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Photography;
