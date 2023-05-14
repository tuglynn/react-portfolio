import React from 'react';
import {Link} from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {

  return (
    <header>
          <h1 className="logo">Patrick TuGlynn</h1>
          <nav>
            <Link
              to="/"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-item select' : 'nav-item'}
            >
              Home
            </Link>
            <Link
              to="/projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-item select' : 'nav-item'}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-item select' : 'nav-item'}
            >
              Contact Me
            </Link>
          </nav>
  </header>
  );
}

export default NavTabs;
