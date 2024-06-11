import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCredCellOne,
  updateCredCellTwo,
  updateCredCellThree,
  deleteCred,
} from '../features/credsList/credsListSlice';
const TableWithReadMore = () => {
  const credsList = useSelector((state) => state.credsList.value);
  const [expandedRows, setExpandedRows] = useState({});
  const [onEditRows, setOnEditRows] = useState({});
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();

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
    const maxLength = 20;
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

  return (
    <div>
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
        <table className='table-auto text-white w-full rounded-xl overflow-hidden'>
          <thead className='border-white bg-green-300 text-black'>
            <tr className='border-white'>
              <th className='border-white'>Toggle View</th>
              <th className='border-white'>Source</th>
              <th className='border-white'>Unique Credential ID</th>
              <th className='border-white'>Credential</th>
              <th className='border-white'>Delete</th>
            </tr>
          </thead>
          <tbody className='border-white bg-gray-900'>
            {credsList.map((ele) => {
              const isExpanded = !!expandedRows[ele.mainId];
              return (
                <tr key={ele.mainId} className='border-white text-center'>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <button
                      className='text-blue-500 hover:underline mt-2'
                      onClick={() => toggleRow(ele.mainId)}
                    >
                      {isExpanded ? (
                        <span title='Read Less' className='invert'>
                          <lord-icon
                            src='https://cdn.lordicon.com/xaubpxfc.json'
                            trigger='hover'
                          ></lord-icon>
                        </span>
                      ) : (
                        <span title='Read More' className='invert'>
                          <lord-icon
                            src='https://cdn.lordicon.com/ygnmvgzy.json'
                            trigger='hover'
                          ></lord-icon>
                        </span>
                      )}
                    </button>
                  </td>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <div className='flex items-center justify-center'>
                      {onEditRows[ele.cellOneID] ? (
                        <>
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
                            className='text-black w-3/4 mx-2 px-2'
                          />
                          <button
                            onClick={(e) => {
                              dispatch(
                                updateCredCellOne({
                                  mainId: ele.mainId,
                                  source: inputValues[ele.mainId]?.cellOne,
                                })
                              );
                              saveEditCellOne(ele);
                            }}
                            className='mx-1 bg-green-500 text-white px-2 rounded-full text-[14px]'
                          >
                            Save
                          </button>
                          <button
                            onClick={(e) => {
                              cancelEditCellOne(ele);
                            }}
                            className='mx-1 bg-red-500 text-white px-2 rounded-full text-[14px]'
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <span className='pb-1 text-wrap break-words w-3/4'>
                            {renderCellContent(ele.source, isExpanded)}
                          </span>
                          <span className='invert cursor-pointer'>
                            <span
                              onClick={() => {
                                copyToClipBoard(ele.source);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  paddingTop: '3px',
                                  paddingRight: '6px',
                                }}
                                src='https://cdn.lordicon.com/iykgtsbt.json'
                                trigger='hover'
                              ></lord-icon>
                            </span>
                            <span
                              onClick={(e) => {
                                editCredentialCellOne(e, ele);
                              }}
                            >
                              <lord-icon
                                src='https://cdn.lordicon.com/gwlusjdu.json'
                                trigger='hover'
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  paddingTop: '3px',
                                  paddingLeft: '6px',
                                }}
                              ></lord-icon>
                            </span>
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <div className='flex items-center justify-center'>
                      {onEditRows[ele.cellTwoID] ? (
                        <>
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
                            className='text-black w-3/4 mx-2 px-2'
                          />
                          <button
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
                            className='mx-1 bg-green-500 text-white px-2 rounded-full text-[14px]'
                          >
                            Save
                          </button>
                          <button
                            onClick={(e) => {
                              cancelEditCellTwo(ele);
                            }}
                            className='mx-1 bg-red-500 text-white px-2 rounded-full text-[14px]'
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <span className='pb-1 text-wrap break-words w-3/4'>
                            {renderCellContent(ele.uniqueCredId, isExpanded)}
                          </span>
                          <span className='invert cursor-pointer'>
                            <span
                              onClick={() => {
                                copyToClipBoard(ele.uniqueCredId);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  paddingTop: '3px',
                                  paddingRight: '6px',
                                }}
                                src='https://cdn.lordicon.com/iykgtsbt.json'
                                trigger='hover'
                              ></lord-icon>
                            </span>
                            <span
                              onClick={(e) => {
                                editCredentialCellTwo(e, ele);
                              }}
                            >
                              <lord-icon
                                src='https://cdn.lordicon.com/gwlusjdu.json'
                                trigger='hover'
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  paddingTop: '3px',
                                  paddingLeft: '6px',
                                }}
                              ></lord-icon>
                            </span>
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <div className='flex items-center justify-center'>
                      {onEditRows[ele.cellThreeID] ? (
                        <>
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
                            className='text-black w-3/4 mx-2 px-2'
                          />
                          <button
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
                            className='mx-1 bg-green-500 text-white px-2 rounded-full text-[14px]'
                          >
                            Save
                          </button>
                          <button
                            onClick={(e) => {
                              cancelEditCellThree(ele);
                            }}
                            className='mx-1 bg-red-500 text-white px-2 rounded-full text-[14px]'
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <span className='pb-1 text-wrap break-words w-3/4'>
                            {renderCellContent(ele.credential, isExpanded)}
                          </span>
                          <span className='invert cursor-pointer'>
                            <span
                              onClick={() => {
                                copyToClipBoard(ele.credential);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  paddingTop: '3px',
                                  paddingRight: '6px',
                                }}
                                src='https://cdn.lordicon.com/iykgtsbt.json'
                                trigger='hover'
                              ></lord-icon>
                            </span>
                            <span
                              onClick={(e) => {
                                editCredentialCellThree(e, ele);
                              }}
                            >
                              <lord-icon
                                src='https://cdn.lordicon.com/gwlusjdu.json'
                                trigger='hover'
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  paddingTop: '3px',
                                  paddingLeft: '6px',
                                }}
                              ></lord-icon>
                            </span>
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <button
                      className=' hover:underline mt-2'
                      onClick={() =>
                        dispatch(deleteCred({ mainId: ele.mainId }))
                      }
                    >
                      <span title='Delete Credential' className=' '>
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
