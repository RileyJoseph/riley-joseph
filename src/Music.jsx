// Music.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Music() {
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

  return (
    <div className="min-h-screen p-8 flex flex-col app-body all">
      <div className="overlay"></div>
      <div className={`overlay glitch`}></div>    

      <div id="bio" className="bio flex flex-col md:flex-row ">
      
        <div className="bio-headshot w-full md:w-1/3 min-h-[300px] md:h-auto bg-cover bg-center bg-no-repeat object-cover"
            style={{ backgroundImage: "url('/images/music2.jpg')" }}>
        </div>

        <div className="info flex-1 p-4 md:pl-16 text-center md:text-left">
          <h2 className="name font-bold">Music</h2>
          <p className='subtitle py-4 font-semibold'>The Book Is Ageless</p>
          <div className='bio-text'>
            <p>
            Riley is a guitarist for the bands Coat, Lover Girl, Twiggs and Trilogy. He is also a composer of soundscapes and electronic 
            music. Currently he has a piece in the Oklahoma Contemporary Art Museum's Art Now exhibit that runs through Feburary 2026. 
            </p> 
              <br />
            <p>
              Below you can find links to Coat, Lover Girl and the Art Now piece, "Temporary Spaces".
              If you'd like to reach out, visit the contact page and choose the appropriate email for you needs. Otherwise,
              I hope you'll give some of this music a listen.
            </p>
          </div>
          <div className='buttons pt-8 mobile-center grid grid-cols-2 gap-2 w-full'>
            <a className='btn btn-white w-full text-center' href="https://coattheband.bandcamp.com/" target="_blank">Coat</a>
            <a className='btn btn-white w-full text-center' href="https://www.instagram.com/lovergirltheband/?hl=en">Lover Girl</a>
            <a className='btn btn-white mt-0 w-full col-span-2 text-center' target="_blank" href="https://goodthebad.bandcamp.com/album/temporary-spaces">Temporary Spaces</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Music;
