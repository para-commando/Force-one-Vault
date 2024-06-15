import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCredCellOne,
  updateCredCellTwo,
  updateCredCellThree,
  deleteCred,
  togglePasswordVisibility,
} from '../features/credsList/credsListSlice';
import hidePasswordIcon from '../assets/hidePassword.png';
import showPasswordIcon from '../assets/showPasswordIcon.png';
import saveIcon from '../assets/save.png';
import cancelIcon from '../assets/cancel.png';

const TableWithReadMore = () => {
  const credsList = useSelector((state) => state.credsList.value);
  const [expandedRows, setExpandedRows] = useState({});
  const [onEditRows, setOnEditRows] = useState({});
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();
  const hidePasswordIconRef = useRef('');
  useEffect(() => {
    const initialValues = {};
    console.log('🚀 ~ useEffect ~ credsList:', credsList);

    if (credsList.length) {
      console.log('🚀 ~ useEffect ~ credsList:', credsList);
      credsList.forEach((ele) => {
        initialValues[ele.mainId] = {
          cellOne: ele.source,
          cellTwo: ele.uniqueCredId,
          cellThree: ele.credential,
        };
      });
      setInputValues(initialValues);
    }
  }, [credsList]);
  const toggleRow = (mainId) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [mainId]: !prevState[mainId],
    }));
  };

  const renderCellContent = (content, isExpanded) => {
    const maxLength = 18;
    if (isExpanded || content.length <= maxLength) {
      return content;
    }
    return `${content.substring(0, maxLength)}...`;
  };
  const handleInputChange = (mainId, field, value) => {
    setInputValues((prevState) => ({
      ...prevState,
      [mainId]: {
        ...prevState[mainId],
        [field]: value,
      },
    }));
  };

  const copyToClipBoard = (params) => {
    console.log('🚀 ~ copyToClipBoard ~ params:', params);
    navigator.clipboard.writeText(params);
    if (params) {
      toast('Copied To Clipboard!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      alert('Empty field value!');
    }
  };

  const saveEditCellOne = (ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellOneID]: !prevState[ele.cellOneID],
    }));
  };

  const cancelEditCellOne = (ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellOneID]: !prevState[ele.cellOneID],
    }));
  };

  const editCredentialCellOne = (e, ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellOneID]: !prevState[ele.cellOneID],
    }));
  };

  const saveEditCellTwo = (ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellTwoID]: !prevState[ele.cellTwoID],
    }));
  };

  const editCredentialCellTwo = (e, ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellTwoID]: !prevState[ele.cellTwoID],
    }));
  };
  const cancelEditCellTwo = (ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellTwoID]: !prevState[ele.cellTwoID],
    }));
  };
  const saveEditCellThree = (ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellThreeID]: !prevState[ele.cellThreeID],
    }));
  };
  const cancelEditCellThree = (ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellThreeID]: !prevState[ele.cellThreeID],
    }));
  };
  const editCredentialCellThree = (e, ele) => {
    setOnEditRows((prevState) => ({
      ...prevState,
      [ele.cellThreeID]: !prevState[ele.cellThreeID],
    }));
  };

  const togglePasswordVisibilityFunc = (ele) => {
    dispatch(
      togglePasswordVisibility({
        mainId: ele.mainId,
        isHidden: ele.isHidden,
      })
    );
    if (hidePasswordIconRef.current.src.includes('showPasswordIcon.png')) {
      hidePasswordIconRef.current.src = hidePasswordIcon;
      return;
    }
    hidePasswordIconRef.current.src = showPasswordIcon;
  };

  return (
    <div className='overflow-x-scroll'>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition='Bounce'
      />
      {/* Same as */}
      <ToastContainer />
      {/* Same as */}
      <ToastContainer />
      {credsList.length > 0 && (
        <table className='table-auto text-white w-full overflow-x-scroll'>
          <thead
            className='table-with-read-more-header-base-styles table-1100-with-read-more-header-base-styles
            table-650-with-read-more-header-base-styles
            table-500-with-read-more-header-base-styles
            table-400-with-read-more-header-base-styles
            table-320-with-read-more-header-base-styles
           '
          >
            <tr className='border-white'>
              <th className='border-white'>Toggle View</th>
              <th className='border-white'>Source</th>
              <th className='border-white'>Unique Cred-ID</th>
              <th className='border-white'>Credential</th>
              <th className='border-white'>Delete</th>
            </tr>
          </thead>
          <tbody className='border-white bg-gray-900'>
            {credsList.map((ele) => {
              const isExpanded = !!expandedRows[ele.mainId];
              return (
                <tr key={ele.mainId} className='border-white text-center h-10'>
                  <td className='table-with-read-more-toggle-col-cell-base-styles'>
                    <button
                      className='text-blue-500 hover:underline mt-2'
                      onClick={() => toggleRow(ele.mainId)}
                    >
                      {isExpanded ? (
                        <span title='Read Less' className=''>
                          <div
                            className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                          >
                            <lord-icon
                              src='https://cdn.lordicon.com/xaubpxfc.json'
                              trigger='hover'
                              style={{ width: '100%', height: '100%' }}
                            ></lord-icon>
                          </div>
                        </span>
                      ) : (
                        <span title='Read More' className='  '>
                          <div
                            className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert'
                          >
                            <lord-icon
                              src='https://cdn.lordicon.com/ygnmvgzy.json'
                              style={{ width: '100%', height: '100%' }}
                              trigger='hover'
                            ></lord-icon>
                          </div>
                        </span>
                      )}
                    </button>
                  </td>
                  <td className='table-with-read-more-source-cell-base-styles'>
                    <div className='flex items-center justify-center'>
                      {onEditRows[ele.cellOneID] ? (
                        <div className='flex flex-col  items-center justify-center'>
                          <input
                            type='text'
                            value={inputValues[ele.mainId]?.cellOne || ''}
                            onChange={(e) =>
                              handleInputChange(
                                ele.mainId,
                                'cellOne',
                                e.currentTarget.value
                              )
                            }
                            className='table-with-read-more-source-edit-cell-base-styles'
                          />
                          <div
                            className='flex table-1100-with-read-more-source-edit-cell-buttons-styles
                          table-650-with-read-more-source-edit-cell-buttons-styles
                          table-500-with-read-more-source-edit-cell-buttons-styles
                          table-400-with-read-more-source-edit-cell-buttons-styles
                          table-320-with-read-more-source-edit-cell-buttons-styles'
                          >
                            <div
                              onClick={(e) => {
                                dispatch(
                                  updateCredCellOne({
                                    mainId: ele.mainId,
                                    source: inputValues[ele.mainId]?.cellOne,
                                  })
                                );
                                saveEditCellOne(ele);
                              }}
                              className='table-with-read-more-save-button-base-styles table-1100-with-read-more-save-button-base-styles
                            table-650-with-read-more-save-button-base-styles
                            table-500-with-read-more-save-button-base-styles
                            table-400-with-read-more-save-button-base-styles
                            table-320-with-read-more-save-button-base-styles '
                            >
                              <img
                                src={saveIcon}
                                alt=''
                                className='w-full h-full cursor-pointer'
                              />
                            </div>
                            <div
                              onClick={(e) => {
                                cancelEditCellOne(ele);
                              }}
                              className='table-with-read-more-cancel-button-base-styles table-1100-with-read-more-cancel-button-base-styles
                            table-650-with-read-more-cancel-button-base-styles
                            table-500-with-read-more-cancel-button-base-styles
                            table-400-with-read-more-cancel-button-base-styles
                            table-320-with-read-more-cancel-button-base-styles'
                            >
                              <img
                                src={cancelIcon}
                                alt=''
                                className='w-full h-full cursor-pointer'
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <span className='table-with-read-more-source-content-base-styles table-1100-with-read-more-source-content-base-styles
                          table-650-with-read-more-source-content-base-styles
                          table-500-with-read-more-source-content-base-styles
                          table-400-with-read-more-source-content-base-styles
                          table-320-with-read-more-source-content-base-styles '>
                            {renderCellContent(ele.source, isExpanded)}
                          </span>
                          <div
                            className='cursor-pointer 
                          table-with-read-more-content-buttons-base-styles table-1100-with-read-more-content-buttons-base-styles'
                          >
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                              onClick={() => {
                                copyToClipBoard(ele.source);
                              }}
                            >
                              {' '}
                              <lord-icon
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                                src='https://cdn.lordicon.com/iykgtsbt.json'
                                trigger='hover'
                              ></lord-icon>
                            </div>
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                              onClick={(e) => {
                                editCredentialCellOne(e, ele);
                              }}
                            >
                              {' '}
                              <lord-icon
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                                src='https://cdn.lordicon.com/gwlusjdu.json'
                                trigger='hover'
                              ></lord-icon>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className='table-with-read-more-unique-cred-id-cell-base-styles'>
                    <div className='flex items-center justify-center'>
                      {onEditRows[ele.cellTwoID] ? (
                        <div className='flex flex-col  items-center justify-center'>
                          <input
                            type='text'
                            value={inputValues[ele.mainId]?.cellTwo || ''}
                            onChange={(e) =>
                              handleInputChange(
                                ele.mainId,
                                'cellTwo',
                                e.currentTarget.value
                              )
                            }
                            className='table-with-read-more-unique-cred-id-edit-cell-base-styles'
                          />
                          <div
                            className='flex table-1100-with-read-more-source-edit-cell-buttons-styles
table-650-with-read-more-source-edit-cell-buttons-styles
table-500-with-read-more-source-edit-cell-buttons-styles
table-400-with-read-more-source-edit-cell-buttons-styles
table-320-with-read-more-source-edit-cell-buttons-styles'
                          >
                            {' '}
                            <div
                              onClick={(e) => {
                                dispatch(
                                  updateCredCellTwo({
                                    mainId: ele.mainId,
                                    uniqueCredId:
                                      inputValues[ele.mainId]?.cellTwo,
                                  })
                                );
                                saveEditCellTwo(ele);
                              }}
                              className='table-with-read-more-save-button-base-styles table-1100-with-read-more-save-button-base-styles
    table-650-with-read-more-save-button-base-styles
    table-500-with-read-more-save-button-base-styles
    table-400-with-read-more-save-button-base-styles
    table-320-with-read-more-save-button-base-styles '
                            >
                              <img
                                src={saveIcon}
                                alt=''
                                className='w-full h-full cursor-pointer'
                              />
                            </div>
                            <div
                              onClick={(e) => {
                                cancelEditCellTwo(ele);
                              }}
                              className='table-with-read-more-cancel-button-base-styles table-1100-with-read-more-cancel-button-base-styles
    table-650-with-read-more-cancel-button-base-styles
    table-500-with-read-more-cancel-button-base-styles
    table-400-with-read-more-cancel-button-base-styles
    table-320-with-read-more-cancel-button-base-styles'
                            >
                              <img
                                src={cancelIcon}
                                alt=''
                                className='w-full h-full cursor-pointer'
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <span className='table-with-read-more-unique-cred-id-content-base-styles   '>
                            {renderCellContent(ele.uniqueCredId, isExpanded)}
                          </span>
                          <div
                            className='cursor-pointer 
                          table-with-read-more-content-buttons-base-styles table-1100-with-read-more-content-buttons-base-styles'
                          >
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                              onClick={() => {
                                copyToClipBoard(ele.uniqueCredId);
                              }}
                            >
                              {' '}
                              <lord-icon
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                                src='https://cdn.lordicon.com/iykgtsbt.json'
                                trigger='hover'
                              ></lord-icon>
                            </div>
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                              onClick={(e) => {
                                editCredentialCellTwo(e, ele);
                              }}
                            >
                              {' '}
                              <lord-icon
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                                src='https://cdn.lordicon.com/gwlusjdu.json'
                                trigger='hover'
                              ></lord-icon>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className='table-with-read-more-cred-cell-base-styles'>
                    <div className='flex items-center justify-center'>
                      {onEditRows[ele.cellThreeID] ? (
                        <div className='flex flex-col  items-center justify-center'>
                          <input
                            type='text'
                            value={inputValues[ele.mainId]?.cellThree || ''}
                            onChange={(e) =>
                              handleInputChange(
                                ele.mainId,
                                'cellThree',
                                e.currentTarget.value
                              )
                            }
                            className='table-with-read-more-cred-edit-cell-base-styles'
                          />
                          <div
                            className='flex table-1100-with-read-more-source-edit-cell-buttons-styles
table-650-with-read-more-source-edit-cell-buttons-styles
table-500-with-read-more-source-edit-cell-buttons-styles
table-400-with-read-more-source-edit-cell-buttons-styles
table-320-with-read-more-source-edit-cell-buttons-styles'
                          >
                            {' '}
                            <div
                              onClick={(e) => {
                                dispatch(
                                  updateCredCellThree({
                                    mainId: ele.mainId,
                                    credential:
                                      inputValues[ele.mainId]?.cellThree,
                                  })
                                );
                                saveEditCellThree(ele);
                              }}
                              className='table-with-read-more-save-button-base-styles table-1100-with-read-more-save-button-base-styles
    table-650-with-read-more-save-button-base-styles
    table-500-with-read-more-save-button-base-styles
    table-400-with-read-more-save-button-base-styles
    table-320-with-read-more-save-button-base-styles '
                            >
                              <img
                                src={saveIcon}
                                alt=''
                                className='w-full h-full cursor-pointer'
                              />
                            </div>
                            <div
                              onClick={(e) => {
                                cancelEditCellThree(ele);
                              }}
                              className='table-with-read-more-cancel-button-base-styles table-1100-with-read-more-cancel-button-base-styles
    table-650-with-read-more-cancel-button-base-styles
    table-500-with-read-more-cancel-button-base-styles
    table-400-with-read-more-cancel-button-base-styles
    table-320-with-read-more-cancel-button-base-styles'
                            >
                              <img
                                src={cancelIcon}
                                alt=''
                                className='w-full h-full cursor-pointer'
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <span className='table-with-read-more-cred-content-base-styles '>
                            {ele.isHidden
                              ? renderCellContent(
                                  '#'.repeat(ele.credential.length),
                                  isExpanded
                                )
                              : renderCellContent(ele.credential, isExpanded)}
                          </span>
                          <div
                            className='cursor-pointer 
                          table-with-read-more-content-buttons-base-styles table-1100-with-read-more-content-buttons-base-styles'
                          >
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert  '
                              onClick={() => {
                                togglePasswordVisibilityFunc(ele);
                              }}
                            >
                              <img
                                ref={hidePasswordIconRef}
                                src={showPasswordIcon}
                                className='table-with-read-more-cred-content-eye-img-styles'
                                alt='Toggle Credential'
                              />
                            </div>
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                              onClick={() => {
                                copyToClipBoard(ele.uniqueCredId);
                              }}
                            >
                              {' '}
                              <lord-icon
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                                src='https://cdn.lordicon.com/iykgtsbt.json'
                                trigger='hover'
                              ></lord-icon>
                            </div>
                            <div
                              className='table-with-read-more-toggle-col-icon-base-styles table-1100-with-read-more-toggle-col-icon-base-styles table-650-with-read-more-toggle-col-icon-base-styles table-500-with-read-more-toggle-col-icon-base-styles 
                          table-400-with-read-more-toggle-col-icon-base-styles 
                          table-320-with-read-more-toggle-col-icon-base-styles  invert '
                              onClick={(e) => {
                                editCredentialCellThree(e, ele);
                              }}
                            >
                              {' '}
                              <lord-icon
                                style={{
                                  width: '100%',
                                  height: '100%',
                                }}
                                src='https://cdn.lordicon.com/gwlusjdu.json'
                                trigger='hover'
                              ></lord-icon>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className='table-with-read-more-delete-cell-base-styles'>
                    <button
                      className=' hover:underline mt-2 w-full'
                      onClick={() =>
                        dispatch(deleteCred({ mainId: ele.mainId }))
                      }
                    >
                      <span title='Delete Credential' className='w-full'>
                        <lord-icon
                          src='https://cdn.lordicon.com/zxvuvcnc.json'
                          trigger='hover'
                          state='hover-cross-2'
                          colors='primary:#FF0000'
                        ></lord-icon>
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableWithReadMore;
