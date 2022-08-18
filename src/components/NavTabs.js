import React from 'react';
import styles from '../styles/styles'




function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 style={styles.h1Text}>Patrick Glynn</h1>
    <nav style={styles.header}>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className='nav-item'
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className='nav-item'
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className='nav-item'
        >
          Contact Me
        </a>
    </nav>
    </header>
  );
}

export default NavTabs;
