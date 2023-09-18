import React from 'react';

function Footer() {
  return (
    <div className='footer p-1'>
        <a href='https://github.com/deegeedubs' target='blank'><img className='footerIcon' src='/images/github.svg' alt='Link to Github' height="50px"/></a>
        <a href='mailto: wittigdaniel.g@gmail.com'><img className='footerIcon' src='/images/envelope-at.svg' alt='Link to Email' height="50px"/></a>
        <a href='https://www.linkedin.com/in/danielgwittig' target='blank'><img className='footerIcon' src='/images/linkedin.svg' alt='Link to LinkedIn' height="50px"/></a>
    </div>
  );
}

export default Footer;
