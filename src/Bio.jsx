import React, { useState } from 'react';

function Bio() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
<div className="min-h-screen p-8 flex flex-col app-body all">
  <div className="overlay"></div>
  <div className={`overlay glitch`}></div>    

  <div id="bio" className="bio flex flex-col md:flex-row ">
    
    {/* Responsive Headshot Image */}
    <div className="bio-headshot w-full md:w-1/3 min-h-[300px] md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/shoe-tie.jpg')" }}>
    </div>

    {/* About Me Section */}
    <div className="info flex-1 p-4 md:pl-16 text-center md:text-left">
      <h2 className="name font-bold">ABOUT</h2>
      <p className='subtitle py-4 font-semibold'>Engineer, Artist, Nonprofit Professional</p>
      <div className='bio-text'>
        <p>
          Riley Joseph is the CTO of Proper Conduct, an all-purpose ad and branding agency in Oklahoma City and has 
          been a software developer for over a decade. Riley has worked at multiple startups, small and large all-purpose agencies, 
          developed large enterprise software and managed databases with hundreds of thousands of users.
        </p> 
        <br />
        <p>
          Living in Oklahoma City, Riley has been participating in the local arts community since 2016. 
          He is currently Secretary on the Board of Directors for the Oklahoma Children's Theatre and a performing musician.
          Riley is a guitarist for the bands Coat and Lover Girl. He is also a composer of soundscapes, electronic 
          music and a practicing film photographer.
        </p>
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

export default Bio;
