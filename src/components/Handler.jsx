import React from 'react';
import tankLogo from '../assets/tank.png';

function Handler() {
  return (
    <>
      <div className='bg-armyBackgroundColor h-screen '>
        <div className='mx-auto max-w-4xl bg-gray-950 text-white px-28 pb-7'>
          <div className='logo flex flex-col items-center justify-center gap-2'>
            <div className='flex items-center text-2xl'>
              <span className='pt-6 font-bold'> Force-One-Vault</span>
              <span>
                <img src={tankLogo} alt='' className='w-16 h-16 mx-2  ' />
              </span>
            </div>
            <div className='text-center mt-0 text-[12px]'>
              <p>Elite Protection For Your Data</p>
            </div>
          </div>

          <div className='text-white flex flex-col py-4 gap-4 items-center'>
            <input
              className='rounded-full border-4 border-green-300 text-black text-center w-full'
              type='text'
              name=''
              id=''
            />
            <div className='flex gap-3 w-full'>
              <input
                className='rounded-full border-4 border-green-300 text-black text-center w-1/2'
                type='text'
                name=''
                id=''
              />
              <input
                className='rounded-full border-4 border-green-300 text-black text-center  w-1/2'
                type='text'
                name=''
                id=''
              />
            </div>
           
            <button className='flex justify-center items-center bg-green-900 rounded-full px-4 py-2 w-fit gap-2 hover:bg-green-950 hover:font-bold border-green-300 border-2'> <lord-icon
              src='https://cdn.lordicon.com/jgnvfzqg.json'
              trigger='hover'
              colors='primary:#ffffff'
            ></lord-icon> Add Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Handler;
