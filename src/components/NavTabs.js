import React from 'react';
import styles from '../styles/styles'




function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 style={styles.h1Text}>Patrick TuGlynn</h1>
    <nav style={styles.header}>
        <a
          href="/"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-item select' : 'nav-item'}
        >
          Home
        </a>
        <a
          href="/projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-item select' : 'nav-item'}
        >
          Projects
        </a>
        <a
          href="/contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-item select' : 'nav-item'}
        >
          Contact Me
        </a>
    </nav>
    </header>
  );
}

export default NavTabs;
