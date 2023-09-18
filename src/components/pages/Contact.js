import React from 'react';

export default function Contact() {

  function handleFormSubmit() {
    window.location.replace('/');
  };

  return (
  <div>
    <h1>Contact Me</h1>
    <form id='contactForm' className='py-3'>
      
      <div className="row">
        <div className="col input-group">
          <span className="input-group-text" id="nameInput">Name</span>
          <input type="text" className="form-control" placeholder="Please Enter Your Name Here..." required/>
        </div>

        <div className="col">
          <select className="form-select mb-3" required>
            <option selected>Reason For Inquiry</option>
            <option value="1">Project Request</option>
            <option value="2">Recruitment</option>
            <option value="3">Request For More Information</option>
            <option value="4">Other...</option>
          </select>
        </div>
      </div>


      <div className="input-group mt-4 has-validation">
        <span className="input-group-text" id="emailInput">Email Address</span>
        <input type="email" className="form-control" placeholder="Please Enter Your Email Address Here..." required/>
      </div>

      

      <div className="input-group mt-4">
        <span className="input-group-text">Message</span>
        <textarea className="form-control" aria-label="With textarea" placeholder="Your message here." required></textarea>
      </div>

      <div className="col-auto">
        <button type="submit" className="btn btn-dark mt-4" style={{width: "200px"}} onSubmit={handleFormSubmit}>Submit</button>
      </div>
    </form>
  </div>
  )
}
