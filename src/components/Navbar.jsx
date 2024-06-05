import React from 'react';

function Navbar() {
  return (
    <nav className='bg-[#1a200e]  text-white  flex justify-between items-center px-6 h-20'>
      <div className='logo font-bold'>Force-One-Vault</div>
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
