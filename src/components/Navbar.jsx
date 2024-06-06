import React from 'react';
import tankLogo from '../assets/tank.png';

function Navbar() {
  return (
    <nav className='bg-[#1a200e]  text-white  flex justify-between items-center py-5 h-20 px-9 text-xl sticky top-0'>
      <div className='logo font-bold flex items-center'>
        Force-One-Vault
        <span>
          <img src={tankLogo} alt='' className='w-14 h-14 mx-2 mb-3' />
        </span>
      </div>
      <ul className='flex gap-14'>
        <li className='hover:font-bold '>
          <a href=''>Home</a>
        </li>
        <li className='hover:font-bold'>
          <a href=''>About</a>
        </li>
        <li className='hover:font-bold'>
          <a href=''>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
