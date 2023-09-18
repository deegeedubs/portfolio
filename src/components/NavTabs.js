import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 sticky-top" style={{position: "sticky"}}>
      <div class="customNav container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <h2 className='mx-3'>Danny Wittig</h2>
          <ul className="nav justify-content-start customNav">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}

                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
            </ul>
        </div>
      </div>
    </nav>

  );
}

export default NavTabs;
