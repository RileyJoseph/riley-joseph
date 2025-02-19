import React, { useState } from 'react';

function Bio() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return (
<div className="min-h-screen p-8 flex flex-col items-center app-body all">
  <div className="overlay"></div>
  <div className={`overlay glitch`}></div>    

  <div id="bio" className="bio home-section flex flex-col md:flex-row items-center md:items-start">
    
    {/* Responsive Headshot Image */}
    <div className="bio-headshot w-full md:w-1/3 min-h-[300px] md:h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/shoe-tie.jpg')" }}>
    </div>

    {/* About Me Section */}
    <div className="info flex-1 p-8 md:p-16 text-center md:text-left">
      <h2 className="name">About Me</h2>
      <p className="text-lg md:text-xl">
        Software developer for almost a decade, I've worked at multiple startups, small and large all-purpose agencies, 
        I've developed large enterprise software and managed databases with hundreds of thousands of users. 
        I have experience working with clients and designers, communicating expectations, fielding concerns, 
        building dynamic and responsive applications from design docs as well as helping to revise designs for optimization and cohesiveness.
      </p> 
      <br />
      <p className="text-lg md:text-xl">
        I'm a graduate from the University of Oklahoma where I majored in Entrepreneurship 
        and New Venture Management and minored in Non-Profit Organization Studies.
        I'm on the Board of Directors for the Oklahoma Children's Theatre and am currently a member of 3 local bands 
        (Coat, Trilogy, and Twiggs).
      </p>
    </div>

  </div>
</div>

  );
}

export default Bio;
