import React, { useState, useEffect } from 'react';

function Photography() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener('contextmenu', handleContextMenu);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);  

  return (
<div className="min-h-screen p-8 flex flex-col app-body all">
  <div className="overlay"></div>
  <div className={`overlay glitch`}></div>    

  <div id="photo-gallery" className="flex flex-col md:flex-row photo-gallery-top">
    <img className="gallery-img w-full md:w-1/3 max-w-[500px] min-h-[300px] md:h-auto bg-cover bg-no-repeat painter object-cover"
      loading='lazy'
      alt="painter on church roof"
      src='/images/the-painter-1.jpg'>
    </img>

    <div className="info flex-1 p-4 md:pl-16 text-center md:text-left w-full md:w-1/2">
      <h2 className="name font-bold">PHOTOS</h2>
      <p className='subtitle py-4 font-semibold'>The Film Gallery</p>
      <div className='bio-text'>
        <p>This section of the site is under construction, 
          more images will be added and later become available in high-resolution for purchase as prints. 
        </p> 
        <br />
        <p>Please reach out via email if you're interested in purchasing before then.</p>
        <br />
        <p>These shots are from all over the world - Athens, Seattle, Zion, NYC, 
        Kissamos, Breckenridge, Paris, and of course, Oklahoma City. </p>
        {/* <p>Using travel as </p> */}
      </div>
    </div>

  </div>
  <div className='photo-gallery flex flex-wrap'>

      <div className='gallery-img-container w-full md:w-2/3'>
        <img 
          className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover" 
          loading="lazy" 
          alt="truck with tv in windshield"          
          src="/images/tv-truck.jpg">
        </img>
      </div>  
      <div className='gallery-img-container w-full md:w-1/3'>
        <img 
          className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall" 
          loading="lazy" 
          alt="bikers on a ferry with seattle in the background"
          src="/images/bikers.jpg">
        </img>
      </div>      

      <div className='gallery-img-container w-full md:w-1/3'>
        <img 
          className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall" 
          loading="lazy" 
          alt="atv on a moutain"
          src="/images/atv.jpg">
        </img>
      </div>        
      <div className='gallery-img-container w-full md:w-2/3 even'>
        <img 
          className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover"
          loading="lazy"
          alt="shadows cast by benches on a ferry"
          src='/images/ferry-shadows.jpg'>
        </img>
      </div>    

      <div className='gallery-img-container w-full md:w-2/3'>
        <img
          className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover"
          src='/images/dolphins-unedited.jpg'
          alt="blowup dolphins in a bin"
          loading="lazy">
        </img>
      </div>    
      <div className='gallery-img-container w-full md:w-1/3'>
        <img
          className="gallery-img hover-lg w-full bg-cover bg-no-repeat bg-right object-cover tall"
          src='/images/beach.jpg'
          alt="lifeguard stand on a beach with a boat in the ocean in the background"
          loading="lazy">
        </img>
      </div>          

      <div className='gallery-img-container w-full md:w-1/3 even'>
        <img 
          className="gallery-img hover-lg w-full  bg-cover bg-no-repeat bg-right object-cover tall"
          loading="lazy"
          alt="chickens pecking around a pair on converse shoes"
          src='/images/converse.jpg'>
        </img>
      </div>         
      <div className='gallery-img-container w-full md:w-2/3 even mb-14'>
        <img 
          className="gallery-img hover-lg w-full  bg-cover bg-no-repeat bg-right object-cover"
          loading="lazy"
          alt="old machinery covered in natural growth"
          src='/images/gasworks.jpg'>
        </img>
      </div>   
  
      {/* <figure className='gallery-img-details w-1/3 flex flex-col justify-center'>
        <figcaption>
          <h2>Delivery</h2>
          <p className='subtitle'>Kissamos, Crete, Greece</p>
        </figcaption>
      </figure> */}

      {/* <figure className='gallery-img-details w-1/3 flex flex-col justify-center'>
        <figcaption>
          <h2>Ferry Shadows</h2>
          <p className='subtitle'>Puget Sound, Vashon, WA</p>
        </figcaption>
      </figure>    */}
      {/* <div className='gallery-img-container w-full md:w-2/3 '>
        <div className="gallery-img hover-lg w-full  bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/images/gasworks.jpg')" }}>
        </div>
      </div>    
      <figure className='gallery-img-detailsw-full md:w-1/3 flex flex-col justify-center'>
        <figcaption>
          <h2>Natural Graffiti</h2>
          <p className='subtitle'>Gasworks Park, Seattle, WA</p>
        </figcaption>
      </figure>  */}
      {/* <figure className='gallery-img-detailsw-full md:w-1/3 flex flex-col justify-center'>
        <figcaption>
          <h2>Dolphin Party</h2>
          <p className='subtitle'>State Fairgounds, Oklahoma City, OK</p>
        </figcaption>
      </figure>    */}

      {/* <figure className='gallery-img-detailsw-full md:w-1/3 flex flex-col justify-center'>
        <figcaption>
          <h2>Natural Graffiti</h2>
          <p className='subtitle'>Gasworks Park, Seattle, WA</p>
        </figcaption>
      </figure>    */}
      {/* <div className='gallery-img-container w-1/5 odd'>
        <div className="gallery-img hover-lg w-full max-w-[500px] min-h-[300px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/ferry-shadows.jpg')" }}>
        </div>
      </div>    
      <div className='gallery-img-container w-1/5 even'>
        <div className="gallery-img hover-lg w-full max-w-[500px] min-h-[300px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/dolphins-unedited.jpg')" }}>
        </div>
      </div>    
      <div className='gallery-img-container w-1/5 odd'>
        <div className="gallery-img hover-lg w-full max-w-[500px] min-h-[300px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/gasworks.jpg')" }}>
        </div>
      </div>   
      <div className='gallery-img-container w-1/5 even'>
        <div className="gallery-img hover-lg w-full max-w-[500px] min-h-[300px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/gasworks.jpg')" }}>
        </div>
      </div>   
      <div className='gallery-img-container w-1/5 odd'>
        <div className="gallery-img hover-lg w-full max-w-[500px] min-h-[300px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/images/gasworks.jpg')" }}>
        </div>
      </div>           */}

  </div>


</div>

  );
}

export default Photography;
