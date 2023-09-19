import React from 'react';
import corkboard from '../../images/Corkboard-Screenshot.png';
import cruise from '../../images/CC_Screenshot.png';
import deco from '../../images/Deco-Screenshot.png';
import book from '../../images/BookSearch-Screenshot.png';
import noteTaker from '../../images/NoteTaker-Screenshot.png';
import JATE from '../../images/JATE-Screenshot.png';

export default function Projects() {
  return (
    <div>
      <h1 className='text-center pb-3' style={{fontWeight: "bold", letterSpacing: "4px", wordSpacing: "10px", fontSize: "48px"}}>Project Samples</h1>


      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card mb-3 project" >
              <a href='https://corkboard-1d9df6d8e0e1.herokuapp.com/' target='blank'>
                <img src={corkboard} className="card-img-top img-fluid" alt="Corkboard Website" style={{objectFit: "cover", height: "300px"}}/>
              </a>
              <div className="card-body" style={{objectFit: "cover", height: "180px", overflowY: "scroll"}}>
                <h5 className="card-title">Corkboard</h5>
                <p className="card-text">Corkboard is an event tracking/planning website that aims to bring people together. Invite your family to a party, organize a hangout with your friends, or start a public gathering at your local pub!</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <a className="float-start link-underline-opacity-25 link-dark" href='https://github.com/deegeedubs/Corkboard' target='blank'>Github Repository</a>
                    <a className="float-end link-underline-opacity-25 link-dark" href='https://corkboard-1d9df6d8e0e1.herokuapp.com/' target='blank'>Deployed Website</a>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card mb-3 project" >
              <a href='https://passenger-party.github.io/Cruise-Controller/index.html' target='blank'>
                <img src={cruise} className="card-img-top img-fluid" alt="Cruise Controller Website" style={{objectFit: "cover", height: "300px"}}/>
                </a>
              <div className="card-body" style={{objectFit: "cover", height: "180px", overflowY: "scroll"}}>
                <h5 className="card-title">Cruise Controller</h5>
                <p className="card-text">Road trip itinerary with distance to travel, time to travel, the weather in your destinations, a list of top places to stay and restaurants to try in your destination. The site also allows the user to save their trip search to a separate page, and return to the trip details.</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <a className="float-start link-underline-opacity-25 link-dark" href='https://github.com/deegeedubs/Cruise-Controller' target='blank'>Github Repository</a>
                    <a className="float-end link-underline-opacity-25 link-dark" href='https://passenger-party.github.io/Cruise-Controller/index.html' target='blank'>Deployed Website</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card mb-3 project" >
              <a href='https://deco-app-f64152d80c15.herokuapp.com/' target='blank'>
                <img src={deco} className="card-img-top img-fluid" alt="Deco Website" style={{objectFit: "cover", height: "300px"}}/>
              </a>
              <div className="card-body" style={{objectFit: "cover", height: "180px", overflowY: "scroll"}}>
                <h5 className="card-title">Deco</h5>
                <p className="card-text">With Deco, take a quiz to uncover your taste in art. Explore different art styles and learn more about them to gain inspiration for your home decor!</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <a className="float-start link-underline-opacity-25 link-dark" href='https://github.com/deegeedubs/deco' target='blank'>Github Repository</a>
                    <a className="float-end link-underline-opacity-25 link-dark" href='https://deco-app-f64152d80c15.herokuapp.com/' target='blank'>Deployed Website</a>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card mb-3 project" >
              <a href='https://book-search-engine-deegeedubs-36cf890a7e18.herokuapp.com/' target='blank'>
                <img src={book} className="card-img-top img-fluid" alt="Book Search Engine" style={{objectFit: "cover", height: "300px"}}/>
                </a>
              <div className="card-body" style={{objectFit: "cover", height: "180px", overflowY: "scroll"}}>
                <h5 className="card-title">Book Search Engine</h5>
                <p className="card-text">Search for books using the Google Books API. Sign up to save books to your collection and revisit them later when you need something to read!</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <a className="float-start link-underline-opacity-25 link-dark" href='https://github.com/deegeedubs/book-search-engine' target='blank'>Github Repository</a>
                    <a className="float-end link-underline-opacity-25 link-dark" href='https://book-search-engine-deegeedubs-36cf890a7e18.herokuapp.com/' target='blank'>Deployed Website</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card mb-3 project" >
              <a href='https://express-note-taker-deegeedubs-15d651057cff.herokuapp.com/' target='blank'>
                <img src={noteTaker} className="card-img-top img-fluid" alt="Note Taker Website" style={{objectFit: "cover", height: "300px"}}/>
              </a>
              <div className="card-body" style={{objectFit: "cover", height: "180px", overflowY: "scroll"}}>
                <h5 className="card-title">Express Note Taker</h5>
                <p className="card-text">Take notes, save them locally, and revisit them later. Optionally, delete notes that you do not need anymore.</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <a className="float-start link-underline-opacity-25 link-dark" href='https://github.com/deegeedubs/express-note-taker' target='blank'>Github Repository</a>
                    <a className="float-end link-underline-opacity-25 link-dark" href='https://express-note-taker-deegeedubs-15d651057cff.herokuapp.com/' target='blank'>Deployed Website</a>
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card mb-3 project" >
              <a href='https://jate-deegeedubs-3ef425485e61.herokuapp.com/' target='blank'>
                <img src={JATE} className="card-img-top img-fluid" alt="Just Another Text Editor Website" style={{objectFit: "cover", height: "300px"}}/>
                </a>
              <div className="card-body" style={{objectFit: "cover", height: "180px", overflowY: "scroll"}}>
                <h5 className="card-title">Just Another Text Editor</h5>
                <p className="card-text">This is a text editor that can be used on your web browser, or that can be downloaded to be used locally and offline.</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <a className="float-start link-underline-opacity-25 link-dark" href='https://github.com/deegeedubs/text-editor-PWA' target='blank'>Github Repository</a>
                    <a className="float-end link-underline-opacity-25 link-dark" href='https://jate-deegeedubs-3ef425485e61.herokuapp.com/' target='blank'>Deployed Website</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>
      

      
    </div>
  );
}
