import React, { useState, useEffect } from 'react';

function Photography() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);  

  return (
<div className="min-h-screen p-8 flex flex-col app-body all">
  <div className="overlay"></div>
  <div className={`overlay glitch`}></div>    

  <div id="photo-gallery" className="flex flex-col md:flex-row photo-gallery-top">
    <div className='gallery-img-container'>
      <div className="gallery-img w-full md:w-1/3 max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter"
        style={{ backgroundImage: "url('/images/the-painter-1.jpg')" }}>
      </div>
    </div>

    <div className="info flex-1 p-4 md:pl-16 text-center md:text-left w-1/2">
      <h2 className="name font-bold">GALLERY</h2>
      <p className='subtitle py-4 font-semibold'>Film Photography</p>
      <div className='bio-text max-w-[200px]'>
        <p>These section of the site is under construction, more images will be added and later become available in high-resolution for purchase as prints. 
        </p> 
        <br />
        <p>Please reach out via email if you're interested in purchasing before then.</p>
        {/* <p>Using travel as </p> */}
      </div>
    </div>

  </div>
  <div className='photo-gallery flex flex-row'>
      <div className='gallery-img-container w-1/4'>
        <div className="gallery-img tv-truck hover-lg w-full md:w-1/3 max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter"
          style={{ backgroundImage: "url('/images/tv-truck.jpg')" }}>
        </div>
      </div>    
      <div className='gallery-img-container w-1/4'>
        <div className="gallery-img hover-lg w-full md:w-1/3 max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter bg-center"
          style={{ backgroundImage: "url('/images/ferry-shadows.jpg')" }}>
        </div>
      </div>    
      <div className='gallery-img-container w-1/4'>
        <div className="gallery-img hover-lg w-full md:w-1/3 max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter bg-center"
          style={{ backgroundImage: "url('/images/dolphins-unedited.jpg')" }}>
        </div>
      </div>    
      <div className='gallery-img-container w-1/4'>
        <div className="gallery-img hover-lg w-full md:w-1/3 max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter bg-center"
          style={{ backgroundImage: "url('/images/gasworks.jpg')" }}>
        </div>
      </div>    

  </div>


</div>

  );
}

export default Photography;
