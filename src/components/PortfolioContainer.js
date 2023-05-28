import React, { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import FadeTransition from './FadeTransition';
import Foot from './Footer';
export default function PortfolioContainer() {

  const [currentPage, setCurrentPage] = useState('Home');
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true);
    }, 200);
  }, []);


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <FadeTransition key={currentPage}>
            {renderPage()}
        </FadeTransition>
       {contentLoaded && <Foot />}
    </div>
  );
}
