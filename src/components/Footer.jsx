import React from 'react';
import tankLogo from '../assets/tank.png';

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className='bg-black text-white'>
      <div className='bg-gray-950 text-center py-3'>
        <a href='#' onClick={handleBackToTop}>
          Back to Top
        </a>
      </div>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex flex-wrap justify-around'>
          {/* About Section */}
          <div id='about' className='w-full md:w-1/3 mb-6'>
            <h2 className='text-xl font-bold mb-4 footer-responsive-styles-500-sub-heading-text'>About Us</h2>
            <p
              className='text-gray-400 responsive-styles-1100-font-text
responsive-styles-650-font-text
responsive-styles-500-font-text
responsive-styles-400-font-text'
            >
              Welcome to our secure Force-One vault, inspired by the bravery and
              strength of the Indian Armed Forces. Here, you can safely store,
              edit, and access your credentials with confidence. Our platform
              ensures the highest level of security, drawing inspiration from
              elite forces like MARCOS, Para Commandos, and the Ghatak Force.
              Your data is our mission.
            </p>
          </div>

          {/* Contact Section */}
          <div id='contact' className='w-full md:w-1/3 mb-6'>
            <h2 className='text-xl font-bold mb-4 footer-responsive-styles-500-sub-heading-text'>Contact Us</h2>
            <p
              className='text-gray-400 responsive-styles-1100-font-text
responsive-styles-650-font-text
responsive-styles-500-font-text
responsive-styles-400-font-text'
            >
              <span className='block'>Email: paracommando.one@gmail.com</span>
              <span className='block'>
                Address: Mangalore, Karnataka, India
              </span>
            </p>
          </div>
        </div>

        <div className='flex items-center text-lg justify-center p-3'>
          <span className='pt-2 font-bold'> Force-One-Vault</span>
          <span>
            <img src={tankLogo} alt='' className='w-11 h-11 mx-2  ' />
          </span>
        </div>

        <div className='text-center border-t border-gray-700 pt-6'>
          <p
            className='text-gray-400 responsive-styles-1100-font-text
responsive-styles-650-font-text
responsive-styles-500-font-text
responsive-styles-400-font-text'
          >
            &copy; {new Date().getFullYear()} www.paracommando.one | All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
