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
          <h6>There is no magic money tree</h6>
        </div>
        <nav className='nav__links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/upload'>Upload</Link>
            </li>
            <li>
              <Link to='topten'>Top 10</Link>
            </li>
          </ul>
        </nav>
        <div className='nav__footer'>We hope you laughed</div>
      </section>
    </>
  );
}

export default Navbar;
