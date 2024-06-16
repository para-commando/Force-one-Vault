import React from 'react';
import tankLogo from '../assets/tank.png';
import credentialShowIcon from '../assets/show.png';
import credentialHideIcon from '../assets/hidden.png';
import emptyLockerImg from '../assets/emptyLocker.png';
import { useRef, useState, useEffect } from 'react';
import TableWithReadMore from './TableWithReadMore';
import { v4 as uuidv4 } from 'uuid';
import { setCredsList,addNewCred, getAllCreds } from '../features/credsList/credsListSlice';
import { useSelector, useDispatch } from 'react-redux';

function Handler() {
  const credentialShowIconImgRef = useRef();
  const credentialRef = useRef();
  const [vaultCell, setVaultCell] = useState({
    source: '',
    uniqueCredId: '',
    credential: '',
    mainId: '',
    isEditNotClicked: true,
    cellOneID: '',
    cellTwoID: '',
    cellThreeID: '',
    isHidden: true,
  });
  const credsList = useSelector((state) => state.credsList.value);

  const dispatch = useDispatch();

  useEffect(() => {
    let creds = localStorage.getItem('creds');
    console.log("dsfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
    const aaa= dispatch(getAllCreds());
    console.log("🚀 ~ useEffect ~ aaa:", aaa)
    if (creds) {
      dispatch(setCredsList(JSON.parse(creds)));
    }   
  }, []);

  const saveCredential = () => {
    if (vaultCell.source || vaultCell.uniqueCredId || vaultCell.credential) {
      vaultCell.mainId = uuidv4();
      vaultCell.cellTwoID = uuidv4();
      vaultCell.cellOneID = uuidv4();
      vaultCell.cellThreeID = uuidv4();
      vaultCell.isEditNotClicked = true;
      vaultCell.isHidden = true;

      dispatch(setCredsList([...credsList, vaultCell]));
      dispatch(addNewCred(vaultCell));
      localStorage.setItem('creds', JSON.stringify([...credsList, vaultCell]));

      setVaultCell({
        source: '',
        uniqueCredId: '',
        credential: '',
      });
    } else {
      alert('All fields cannot be empty!');
    }
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
      <div className='handler-base-styles handler-1100-base-styles'>
        <div
          className='handler-add-cred-section-base-styles handler-1100-add-cred-section-styles
        handler-500-add-cred-section-styles
        handler-400-add-cred-section-styles'
        >
          <div className='handler-logo-section-base-styles handler-1100-logo-section-styles'>
            <div className='handler-logo-title-section-base-styles handler-1100-logo-title-section-styles'>
              <span
                className='handler-logo-title-text-section-base-styles handler-1100-logo-title-text-section-styles
                handler-500-logo-title-text-section-styles'
              >
                Force-One-Vault
              </span>
              <span>
                <img
                  src={tankLogo}
                  alt=''
                  className='handler-logo-title-img-section-base-styles handler-1100-logo-title-img-section-styles
                  handler-650-logo-title-img-section-styles
                  handler-500-logo-title-img-section-styles'
                />
              </span>
            </div>
            <div className='handler-logo-sub-title-section-base-styles handler-1100-logo-sub-title-section-styles'>
              <p>Elite Protection For Your Data</p>
            </div>
          </div>

          <div className='handler-input-fields-section-base-styles handler-1100-input-fields-section-base-styles'>
            <input
              className='handler-input-fields-source-section-base-styles handler-1100-input-fields-source-section-base-styles
              handler-650-input-fields-source-section-base-styles'
              value={vaultCell.source}
              onChange={(e) => handleInputData(e)}
              placeholder='Enter Source URL/Info'
              type='text'
              name='source'
              id=''
            />
            <div
              className='flex gap-3 w-full 
            handler-400-input-fields-unique-creds-and-creds-section-base-styles
            handler-320-input-fields-unique-creds-and-creds-section-base-styles'
            >
              <input
                className='handler-input-fields-unique-creds-id-section-base-styles handler-1100-input-fields-unique-creds-id-section-base-styles
                handler-650-input-fields-unique-creds-id-section-base-styles
                handler-400-input-fields-unique-creds-id-section-base-styles
                handler-320-input-fields-unique-creds-id-section-base-styles'
                value={vaultCell.uniqueCredId}
                onChange={(e) => handleInputData(e)}
                placeholder='Unique Credential-id'
                type='text'
                name='uniqueCredId'
                id=''
              />
              <div
                className='handler-input-fields-creds-section-base-styles handler-1100-input-fields-creds-section-base-styles 
              handler-650-input-fields-creds-section-base-styles
              handler-400-input-fields-creds-section-base-styles
              handler-320-input-fields-creds-section-base-styles'
              >
                <input
                  ref={credentialRef}
                  className='handler-input-fields-creds-input-section-base-styles handler-650-input-fields-creds-input-section-base-styles'
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
                    className='handler-input-fields-creds-input-eye-img-section-base-styles handler-1100-input-fields-creds-input-eye-img-section-base-styles
                    handler-650-input-fields-creds-input-eye-img-section-base-styles
                    handler-500-input-fields-creds-input-eye-img-section-base-styles'
                    alt='Show Credential'
                  />
                </span>
              </div>
            </div>

            <button
              onClick={saveCredential}
              className='handler-input-fields-add-creds-section-base-styles handler-1100-input-fields-add-creds-section-base-styles handler-650-input-fields-add-creds-section-base-styles'
            >
              <div className='handler-input-fields-add-creds-icon-base-styles handler-1100-input-fields-add-creds-icon-base-styles handler-650-input-fields-add-creds-icon-base-styles'>
                <lord-icon
                  src='https://cdn.lordicon.com/jgnvfzqg.json'
                  trigger='hover'
                  colors='primary:#ffffff'
                  style={{ width: '100%', height: '100%' }}
                ></lord-icon>
              </div>
              Add Credential
            </button>
          </div>
        </div>
        <div className=' handler-passwords-display-section-base-styles '>
          <h2
            className='handler-passwords-display-heading-base-styles
          handler-1100-passwords-display-heading-base-styles '
          >
            Your Credentials
          </h2>
          {/* overflow:hidden is needed to be added if border radius is to be put on a table */}
          {credsList.length === 0 && (
            <div className='handler-passwords-display-empty-list-display-base-styles '>
              <span>
                <img
                  className='handler-passwords-display-empty-list-display-img-base-styles handler-1100-passwords-display-empty-list-display-img-base-styles'
                  src={emptyLockerImg}
                  alt=''
                />
              </span>
              <span className='text-lg py-2'> No Credentials Found</span>
            </div>
          )}
          <TableWithReadMore />
        </div>
      </div>
    </>
  );
}

export default Handler;
