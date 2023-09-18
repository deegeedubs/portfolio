import React from 'react';

export default function Resume() {
  return (
    <div>
      <h1>Download My Resume Here: <span className='float-end'><a className='link-dark' href='/Danny-Wittig-Resume.pdf' target='blank' download><img className='footerIcon' src='/images/download.svg' alt='download icon' height="50px"/>Danny Wittig's Resume</a></span></h1>
      <img className='img-fluid p-4' src='/images/Resume-Screenshot.png' alt='resume' />
    </div>
  );
}
