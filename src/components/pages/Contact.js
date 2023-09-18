import React from 'react';

export default function Contact() {
  return (
  <div>
    <h1>Contact Me</h1>
    <div className='py-3'>
      
      <div class="row">
        <div class="col input-group mb-3">
          <span class="input-group-text" id="nameInput">Name</span>
          <input type="text" class="form-control" placeholder="Please Enter Your Name Here..." />
        </div>

        <div class="col">
          <select class="form-select mb-3">
            <option selected>Reason For Inquiry</option>
            <option value="1">Project Request</option>
            <option value="2">Recruitment</option>
            <option value="3">Request For More Information</option>
            <option value="4">Other...</option>
          </select>
        </div>
      </div>


      <div class="input-group mb-3">
        <span class="input-group-text" id="emailInput">Email Address</span>
        <input type="text" class="form-control" placeholder="Please Enter Your Email Address Here..." />
      </div>

      

      <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  </div>
  )
}
