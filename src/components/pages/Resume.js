import React from 'react';
import download from '../../images/download.svg'
import resume from '../../images/Resume-Screenshot.png'

export default function Resume() {
  return (
    <div>
      <h1>Download My Resume Here: <span className='float-end'><a className='link-dark' href='/Danny-Wittig-Resume.pdf' target='blank' download><img className='footerIcon' src={download} alt='download icon' height="50px"/>Danny Wittig's Resume</a></span></h1>
      <img className='img-fluid p-4' src={resume} alt='resume' />
    </div>
  );
}
