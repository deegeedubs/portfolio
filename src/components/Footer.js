import React from 'react';

import github from '../images/github.svg';
import envelope from '../images/envelope-at.svg';
import linkedIn from '../images/linkedin.svg';

function Footer() {
  return (
    <div className='footer p-1'>
        <a href='https://github.com/deegeedubs' target='blank'><img className='footerIcon' src={github} alt='Link to Github' height="50px"/></a>
        <a href='mailto: wittigdaniel.g@gmail.com'><img className='footerIcon' src={envelope} alt='Link to Email' height="50px"/></a>
        <a href='https://www.linkedin.com/in/danielgwittig' target='blank'><img className='footerIcon' src={linkedIn} alt='Link to LinkedIn' height="50px"/></a>
    </div>
  );
}

export default Footer;
