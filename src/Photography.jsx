import React, { useState } from 'react';

function Photography() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
<div className="min-h-screen p-8 flex flex-col app-body all">
  <div className="overlay"></div>
  <div className={`overlay glitch`}></div>    

  <div id="photo-gallery" className="flex flex-col md:flex-row photo-gallery">
    <div className="gallery-img w-full md:w-1/3 max-w-[150px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter"
        style={{ backgroundImage: "url('/images/the-painter-1.jpg')" }}>
    </div>

    <div className="info flex-1 p-4 md:pl-16 text-center md:text-left w-1/2">
      <h2 className="name font-bold">GALLERY</h2>
      <p className='subtitle py-4 font-semibold'>Film Photography</p>
      <div className='bio-text'>
        <div className="gallery-img w-full max-w-[300px] min-h-[300px] md:h-auto bg-cover bg-no-repeat tv-truck"
          style={{ backgroundImage: "url('/images/tv-truck.jpg')" }}>
        </div>
      </div>
      <div className='buttons pt-8'>
        <a className='btn btn-white' href="https://coattheband.bandcamp.com/" target="_blank">Music</a>
        <a className='btn btn-white ml-1' href="/">Photography</a>
        <a className='btn btn-white ml-1' href="/portfolio">Work</a>
      </div>
    </div>

  </div>
</div>

  );
}

export default Photography;
