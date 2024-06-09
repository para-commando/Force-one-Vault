import React from 'react';
import tankLogo from '../assets/tank.png';
import credentialShowIcon from '../assets/show.png';
import credentialHideIcon from '../assets/hidden.png';
import emptyLockerImg from '../assets/emptyLocker.png';
import { useRef, useState, useEffect } from 'react';
import TableWithReadMore from './TableWithReadMore';
import { v4 as uuidv4 } from 'uuid';
function Handler() {
  const credentialShowIconImgRef = useRef();
  const credentialRef = useRef();
  const [vaultCell, setVaultCell] = useState({
    source: '',
    uniqueCredId: '',
    credential: '',
    id:''
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
    vaultCell.id = uuidv4();
    setCredsList([...credsList, vaultCell]);
    localStorage.setItem('creds', JSON.stringify([...credsList, vaultCell]));

    const aaa = localStorage.getItem('creds');
    console.log('🚀 ~ saveCredential ~ aaa:', aaa);
  };

  const showCredential = () => {
    if (credentialShowIconImgRef.current.src.includes('hidden.png')) {
      credentialShowIconImgRef.current.src = credentialShowIcon;
      credentialRef.current.type = 'password';

      return;
    }
    credentialRef.current.type = 'text';
    credentialShowIconImgRef.current.src = credentialHideIcon;
    return;
  };

  const handleInputData = (e) => {
    setVaultCell({
      ...vaultCell,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className='bg-armyBackgroundColor h-full relative py-20'>
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
                  ref={credentialRef}
                  className='rounded-full border-4 border-green-300 text-black text-center w-full pr-10'
                  value={vaultCell.credential}
                  onChange={(e) => handleInputData(e)}
                  placeholder='Credential'
                  name='credential'
                  type='password'
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
              className='flex justify-center items-center bg-green-900 rounded-full px-4 py-2 w-fit gap-2 hover:bg-green-950 hover:font-bold border-green-300  '
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
          <h2 className='text-white font-bold text-2xl p-5 text-center'>
            Your Credentials
          </h2>
          {/* overflow:hidden is needed to be added if border radius is to be put on a table */}
          {credsList.length === 0 && (
            <div className='text-white text-[14px] flex flex-col justify-center items-center'>
              <span>
                <img className='w-44 h-44 invert' src={emptyLockerImg} alt='' />
              </span>
              <span className='text-lg py-2'> No Credentials Found</span>
            </div>
          )}
          <TableWithReadMore credsList={credsList} />
        </div>
      </div>
    </>
  );
}

export default Handler;
