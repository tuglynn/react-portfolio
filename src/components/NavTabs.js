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
          // style={styles.button}
          className='nav-item'
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // style={styles.button}
          className='nav-item'
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // style={styles.button}
          className='nav-item'
        >
          Contact Me
        </a>
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          // style={styles.button}
          className='nav-item'
        >
          Resume
        </a>
    </nav>
    </header>
  );
}

export default NavTabs;
