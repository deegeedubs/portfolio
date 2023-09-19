import React from 'react';

import Danny from '../../images/Danny.jpeg'

export default function Home() {
  return (
    <div className='container-lg'>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <img src={Danny} alt='Danny Wittig' width='100%' style={{borderRadius: "15px", float: "left" }}></img>
        </div>
        <div className='col-12 col-lg-6 my-3'>
          <h1>
            Hello and welcome to my portfolio.
          </h1>
          <br />
          <p style={{fontSize: "1.25em"}}>
          My name is Danny Wittig and I am an aspiring web developer with a background in Engineering and Customer Service based out of Chicago, IL.
          </p>
          <br />
          <p>
          After graduating from the Illinois Institute of Technology in 2019 with a Bachelors of Science in Chemical Engineering, I spent a few years in the work-force at a chemical instrumentation company testing my skills in the industry to see what skills I liked and did not like utilizing in my day-to-day activities. I found that I loved the problem-solving and troubleshooting aspects of my job, but had a desire to use these skills to create something new, rather than sell something made.
          </p><p>
          This lead me to rediscover a topic that I had only briefly touched on during my undergraduate studies -- coding. I had little experience, but decided to do some research about the types of work that can be done with this. Web development immediately stood out to me as a field where you can use these various tools to create limitless new projects to solve the worlds problems.
          </p><p>
          This lead me to enroll in the Full Stack Web Development Coding Bootcamp through Northwestern University to begin my journey into this new field. What you will find in this portfolio is a combination of class work from this course, as well as some passion projects that will highlight my abilities and interests as a web developer and an enthusiastic creator.
          
          </p>
        </div>
        
      </div>
    </div>
  );
}
