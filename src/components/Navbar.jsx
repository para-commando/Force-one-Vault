import React from 'react';
import tankLogo from '../assets/tank.png';

function Navbar() {
  return (
    <>
      <nav
        className='navbar-base-styles
       responsive-styles-1100-font-text responsive-styles-1100-navbar-gen   responsive-styles-650-font-text responsive-styles-650-navbar-gen responsive-styles-500-font-text responsive-styles-500-navbar-gen responsive-styles-400-font-text responsive-styles-400-navbar-gen'
      >
        <div className='navbar-logo-base-styles'>
          Force-One-Vault
          <span>
            <img
              src={tankLogo}
              alt=''
              className='navbar-logo-img-base-styles responsive-styles-1100-navbar-logo-img responsive-styles-650-navbar-logo-img
              responsive-styles-500-navbar-logo-img
              responsive-styles-400-navbar-logo-img
              '
            />
          </span>
        </div>
        <ul className='navbar-links-base-styles responsive-styles-1100-navbar-links responsive-styles-650-navbar-links responsive-styles-500-navbar-links responsive-styles-400-navbar-links responsive-styles-320-navbar-links'>
          <li className='navbar-links-hover-effect'>
            <a href='/'>Home</a>
          </li>
          <li className='navbar-links-hover-effect'>
            <a href='#about'>About</a>
          </li>
          <li className='navbar-links-hover-effect'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
