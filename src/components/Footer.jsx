import React from 'react';

function Footer() {
  return (
    <footer className='bg-black text-white py-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-around'>
          {/* About Section */}
          <div id='about' className='w-full md:w-1/3 mb-6'>
            <h2 className='text-xl font-bold mb-4'>About Us</h2>
            <p className='text-gray-400'>
              Welcome to our secure vault, inspired by the bravery and strength of the Indian Armed Forces. Here, you can safely store, edit, and access your credentials with confidence. Our platform ensures the highest level of security, drawing inspiration from elite forces like MARCOS, Para Commandos, and the Ghatak Force. Your data is our mission.
            </p>
          </div>
        
          {/* Contact Section */}
          <div id='contact' className='w-full md:w-1/3 mb-6'>
            <h2 className='text-xl font-bold mb-4'>Contact Us</h2>
            <p className='text-gray-400'>
              <span className='block'>Email: paracommando.one@gmail.com</span>
               <span className='block'>Address: Karnataka, India</span>
            </p>
          </div>
        </div>
        <div className='text-center border-t border-gray-700 pt-6'>
          <p className='text-gray-400'>
            &copy; {new Date().getFullYear()} www.paracommando.one | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
