import React from 'react';
// Dependency
import { Link } from 'react-router-dom';
// Styles
import './navbar.css';

function Navbar() {
  return (
    <>
      <section className='navbar__container'>
        <div className='nav__titles'>
          <h3>WIRWPHT</h3>
        </div>
        <nav className='nav__links'>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Upload</Link>
            </li>
            <li>
              <Link>Top 10</Link>
            </li>
          </ul>
        </nav>
        <div className='nav__footer'>We hope you laughed</div>
      </section>
    </>
  );
}

export default Navbar;
