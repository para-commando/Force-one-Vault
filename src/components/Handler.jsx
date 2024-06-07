import React from 'react';
import tankLogo from '../assets/tank.png';
import credentialShowIcon from '../assets/show.png';
import credentialHideIcon from '../assets/hidden.png';

import { useRef, useState } from 'react';
function Handler() {
  const credentialShowIconImgRef = useRef();
  const [vaultCell, setVaultCell] = useState({
    source: '',
    uniqueCredId: '',
    credential: '',
  });

  const saveCredential = () => {};

  const showCredential = () => {
    if (credentialShowIconImgRef.current.src.includes('hidden.png')) {
      credentialShowIconImgRef.current.src = credentialShowIcon;
      return;
    }

    credentialShowIconImgRef.current.src = credentialHideIcon;
    return;
  };
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
              value={vaultCell.source}
              placeholder='Enter Source URL/Info'
              type='text'
              name=''
              id=''
            />
            <div className='flex gap-3 w-full'>
              <input
                className='rounded-full border-4 border-green-300 text-black text-center w-1/2'
                value={vaultCell.uniqueCredId}
                placeholder='Unique Credential-id'
                type='text'
                name=''
                id=''
              />
              <div className='flex items-center relative w-1/2'>
                <input
                  className='rounded-full border-4 border-green-300 text-black text-center w-full pr-10'
                  value={vaultCell.credential}
                  placeholder='Credential'
                  type='text'
                  name=''
                  id=''
                />
                <span className='absolute right-3' onClick={showCredential}>
                  <img
                    ref={credentialShowIconImgRef}
                    src={credentialShowIcon}
                    className='w-8 h-8 cursor-pointer'
                    alt='Show Credential'
                  />
                </span>
              </div>
            </div>

            <button
              onClick={saveCredential}
              className='flex justify-center items-center bg-green-900 rounded-full px-4 py-2 w-fit gap-2 hover:bg-green-950 hover:font-bold border-green-300 border-2'
            >
              {' '}
              <lord-icon
                src='https://cdn.lordicon.com/jgnvfzqg.json'
                trigger='hover'
                colors='primary:#ffffff'
              ></lord-icon>{' '}
              Add Credential
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Handler;
