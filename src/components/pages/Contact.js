import React from 'react';

export default function Contact() {

  return (
  <div>
    <h1>Contact Me</h1>
    <form id='contactForm' className='py-3'>
      
      <div class="row">
        <div class="col input-group">
          <span class="input-group-text" id="nameInput">Name</span>
          <input type="text" class="form-control" placeholder="Please Enter Your Name Here..." required/>
        </div>

        <div class="col">
          <select class="form-select mb-3" required>
            <option selected>Reason For Inquiry</option>
            <option value="1">Project Request</option>
            <option value="2">Recruitment</option>
            <option value="3">Request For More Information</option>
            <option value="4">Other...</option>
          </select>
        </div>
      </div>


      <div class="input-group mt-4 has-validation">
        <span class="input-group-text" id="emailInput">Email Address</span>
        <input type="email" class="form-control" placeholder="Please Enter Your Email Address Here..." required/>
      </div>

      

      <div class="input-group mt-4">
        <span class="input-group-text">Message</span>
        <textarea class="form-control" aria-label="With textarea" placeholder="Your message here." required></textarea>
      </div>

      <div class="col-auto">
        <button type="submit" class="btn btn-dark mt-4" style={{width: "200px"}}>Submit</button>
      </div>
    </form>
  </div>
  )
}
