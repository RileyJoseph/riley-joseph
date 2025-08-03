import React, { useState } from 'react';

function Contact() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDownload = () => {
    if (password === 'resumeplease') { // Replace with actual password logic
      setError(null);
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resumse.pdf";
      link.click();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen p-8 flex flex-col items-center app-body contact-me">
      <div className="overlay"></div>
      <div className={`overlay glitch`}></div>  

      <div id="bio" className="bio flex flex-col md:flex-row "> 
        <img 
          className="bio-headshot w-full md:w-1/3 min-h-[300px] md:h-auto bg-cover bg-center bg-no-repeat object-cover"
          src='/images/contact.jpg'>
        </img>

        <div className="info flex-1 p-4 md:pl-16 text-center md:text-left">
          <h2 className="name font-bold">Contact</h2>
          <p className='subtitle py-4 font-semibold'>riley.m.joseph1@gmail.com</p>
            <div className='bio-text'>
              <p>
                The easiest way to get in touch is via email.
                If you'd like the full 
                services of Proper Conduct, please reach out to:
                <br />
                <p className='font-bold'>properconductagency@gmail.com</p>
              </p>
              <br />
              <a className='mt-12 btn btn-white w-full' href="https://www.linkedin.com/in/rileymjoseph/" 
              target="_blank">LinkedIn </a>
            </div>
        </div>
      </div>
    </div>        

  );
}

export default Contact;
