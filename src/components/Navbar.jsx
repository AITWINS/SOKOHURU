// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1>Soko Huru</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/feed" className={styles.navLink}>Feed</Link>
        </li>
        <li>
          <Link to="/login" className={styles.navLink}>Login</Link>
        </li>
        <li>
          <Link to="/profile" className={styles.navLink}>Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
