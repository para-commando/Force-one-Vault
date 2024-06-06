import React from 'react';

function Handler() {
  return (
    <>
      <div className='bg-armyBackgroundColor h-screen '>
        <div className='mx-auto max-w-4xl bg-blue-200 myContainer'>
          <h1>Force-One-Vault</h1>
          <p>Elite Protection For Your Data</p>
          <div className='text-white flex flex-col p-4 gap-2'>
            <input className='rounded-full' type='text' name='' id='' />
            <div className='flex gap-2'>
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Handler;
