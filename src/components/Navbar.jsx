import React from 'react';

function Navbar() {
  return (
    <nav className='bg-[#263012]  text-white font-bold'>
        <div className="logo">
            Force-One-Vault
        </div>
      <ul className=''>
        <li>
          <a href=''>Home</a>
        </li>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
