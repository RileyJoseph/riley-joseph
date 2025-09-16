import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Bio() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
<div className="min-h-screen p-8 flex flex-col app-body all">
  <div className="overlay"></div>
  <div className={`overlay glitch`}></div>    

  <div id="bio" className="bio flex flex-col md:flex-row ">
  
    <div className="bio-headshot w-full md:w-1/3 min-h-[300px] md:h-auto bg-cover bg-center bg-no-repeat object-cover"
        style={{ backgroundImage: "url('/images/photography/canopy-headshot-bw.jpg')" }}>
    </div>

    <div className="info flex-1 p-4 md:pl-16 text-center md:text-left">
      <h2 className="name font-bold">Bio</h2>
      <p className='subtitle py-4 font-semibold'>Engineer, Artist, Nonprofit Professional</p>
      <div className='bio-text'>
        <p>
          Riley Joseph is the CTO of Proper Conduct, an all-purpose ad and branding agency in Oklahoma City and has 
          been a software developer for over a decade. Riley has worked at multiple startups, small and large all-purpose agencies, 
          developed large enterprise software and managed databases with hundreds of thousands of users.
        </p> 
          <br />
        <p>
          Living in Oklahoma City, Riley has been involved in the local arts community since 2016. 
          He is currently Secretary on the Board of Directors for the Oklahoma Children's Theatre and a performing musician.
          Riley is a guitarist for the bands Coat and Lover Girl. He is also a composer of soundscapes, electronic 
          music and a practicing film photographer.
        </p>
      </div>
      <div className='buttons pt-8'>
        <Link className='btn btn-white' to="/music">Music</Link>
        <Link className='btn btn-white ml-1' to="/photography">Photography</Link>
        <a className='btn btn-white ml-1' href="/portfolio">Work</a>
      </div>
    </div>

  </div>
</div>

  );
}

export default Bio;
