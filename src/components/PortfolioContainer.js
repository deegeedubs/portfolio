import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='general'>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className='container-sm main p-4 my-4'>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
