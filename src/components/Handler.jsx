import React from 'react';
import tankLogo from '../assets/tank.png';
import credentialShowIcon from '../assets/show.png';
import credentialHideIcon from '../assets/hidden.png';

import { useRef, useState, useEffect } from 'react';
function Handler() {
  const credentialShowIconImgRef = useRef();
  const [vaultCell, setVaultCell] = useState({
    source: '',
    uniqueCredId: '',
    credential: '',
  });
  const [credsList, setCredsList] = useState([]);

  useEffect(() => {
    let creds = localStorage.getItem('creds');
    if (creds) {
      setCredsList(JSON.parse(creds));
    }
  }, []);

  const saveCredential = () => {
    const aaa11 = localStorage.getItem('creds');
    console.log('🚀 ~ saveCredential ~ aaa11:', aaa11);
    const creds = {
      source: vaultCell.source || '',
      uniqueCredId: vaultCell.uniqueCredId || '',
      credential: vaultCell.credential || '',
    };

    setCredsList([...credsList, vaultCell]);
    localStorage.setItem('creds', JSON.stringify([...credsList, vaultCell]));

    const aaa = localStorage.getItem('creds');
    console.log('🚀 ~ saveCredential ~ aaa:', aaa);
  };

  const showCredential = () => {
    if (credentialShowIconImgRef.current.src.includes('hidden.png')) {
      credentialShowIconImgRef.current.src = credentialShowIcon;
      return;
    }

    credentialShowIconImgRef.current.src = credentialHideIcon;
    return;
  };

  const handleInputData = (e) => {
    setVaultCell({ ...vaultCell, [e.target.name]: e.target.value });
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
              onChange={(e) => handleInputData(e)}
              placeholder='Enter Source URL/Info'
              type='text'
              name='source'
              id=''
            />
            <div className='flex gap-3 w-full'>
              <input
                className='rounded-full border-4 border-green-300 text-black text-center w-1/2'
                value={vaultCell.uniqueCredId}
                onChange={(e) => handleInputData(e)}
                placeholder='Unique Credential-id'
                type='text'
                name='uniqueCredId'
                id=''
              />
              <div className='flex items-center relative w-1/2'>
                <input
                  className='rounded-full border-4 border-green-300 text-black text-center w-full pr-10'
                  value={vaultCell.credential}
                  onChange={(e) => handleInputData(e)}
                  placeholder='Credential'
                  name='credential'
                  type='text'
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
        <div className='passwords justify-center px-5'>
          <h2>Your Credentials</h2>
          <table className='table-auto text-white w-full '>
            <thead className='border-white border-2 bg-green-800'>
              <tr className='border-white border-2'>
                <th className='border-white border-2'>Song</th>
                <th className='border-white border-2'>Artist</th>
                <th className='border-white border-2'>Year</th>
              </tr>
            </thead>
            <tbody className='border-white border-2'>
              <tr className='border-white border-2'>
                <td className=' text-center border-white border-2'>
                  The Sliding Mr. Bones (Next Stop, Pottersville)
                </td>
                <td className=' text-center border-white border-2'>
                  {' '}
                  Malcolm Lockyer
                </td>
                <td className=' text-center border-white border-2'>1961</td>
              </tr>
              <tr className='border-white border-2'>
                <td className=' text-center border-white border-2'>
                  Witchy Woman
                </td>
                <td className=' text-center border-white border-2'>
                  The Eagles
                </td>
                <td className=' text-center border-white border-2'>1972</td>
              </tr>
              <tr className='border-white border-2'>
                <td className=' text-center border-white border-2'>
                  Shining Star
                </td>
                <td className=' text-center border-white border-2'>
                  Earth, Wind, and Fire
                </td>
                <td className=' text-center border-white border-2'>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Handler;
