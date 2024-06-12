import React from 'react';
import tankLogo from '../assets/tank.png';

function Navbar() {
  return (
    <>
      <nav className='bg-[#1a200e]  text-white  flex justify-between items-center py-5 h-20 px-9 text-xl sticky top-0 z-10 responsive-styles-1100-font-text responsive-styles-1100-navbar responsive-styles-650-font-text responsive-styles-650-navbar-gen responsive-styles-500-font-text responsive-styles-500-navbar-gen responsive-styles-400-font-text responsive-styles-400-navbar-gen'>
        <div className='logo font-bold flex items-center'>
          Force-One-Vault
          <span>
            <img
              src={tankLogo}
              alt=''
              className='w-14 h-14 mx-2 mb-3 responsive-styles-1100-navbar-logo-img responsive-styles-650-navbar-logo-img
              responsive-styles-500-navbar-logo-img
              responsive-styles-400-navbar-logo-img
              '
            />
          </span>
        </div>
        <ul className='flex gap-14 responsive-styles-1100-navbar-links responsive-styles-650-navbar-links responsive-styles-500-navbar-links responsive-styles-400-navbar-links responsive-styles-320-navbar-links'>
          <li className='hover:font-bold '>
            <a href='/'>Home</a>
          </li>
          <li className='hover:font-bold'>
            <a href='#about'>About</a>
          </li>
          <li className='hover:font-bold'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
