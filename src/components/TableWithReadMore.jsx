import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const TableWithReadMore = ({ credsList }) => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderCellContent = (content, isExpanded) => {
    const maxLength = 20;
    if (isExpanded || content.length <= maxLength) {
      return content;
    }
    return `${content.substring(0, maxLength)}...`;
  };

  const copyToClipBoard = (params) => {
     navigator.clipboard.writeText(params);
    toast('Copied To Clipboard!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    });
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
            </tr>
          </thead>
          <tbody className='border-white bg-gray-900'>
            {credsList.map((ele) => {
              const isExpanded = !!expandedRows[ele.id];
              return (
                <tr key={ele.id} className='border-white text-center'>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <button
                      className='text-blue-500 hover:underline mt-2'
                      onClick={() => toggleRow(ele.id)}
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
                      <span className='pb-1 text-wrap break-words w-3/4'>
                        {renderCellContent(ele.source, isExpanded)}
                      </span>
                      <span
                        className='invert cursor-pointer'
                        onClick={() => {
                          copyToClipBoard(ele.source);
                        }}
                      >
                        <lord-icon
                          style={{
                            width: '25px',
                            height: '25px',
                            paddingTop: '3px',
                            paddingLeft: '3px',
                          }}
                          src='https://cdn.lordicon.com/iykgtsbt.json'
                          trigger='hover'
                        ></lord-icon>
                      </span>
                    </div>
                  </td>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <div className='flex items-center justify-center'>
                      <span className='pb-1 text-wrap break-words w-3/4'>
                        {renderCellContent(ele.uniqueCredId, isExpanded)}
                      </span>
                      <span
                        className='invert cursor-pointer'
                        onClick={() => {
                          copyToClipBoard(ele.uniqueCredId);
                        }}
                      >
                        <lord-icon
                          style={{
                            width: '25px',
                            height: '25px',
                            paddingTop: '3px',
                            paddingLeft: '3px',
                          }}
                          src='https://cdn.lordicon.com/iykgtsbt.json'
                          trigger='hover'
                        ></lord-icon>{' '}
                      </span>
                    </div>
                  </td>
                  <td className='border-2 py-2 border-black text-center max-w-32'>
                    <div className='flex items-center justify-center'>
                      <span className='pb-1 text-wrap break-words w-3/4'>
                        {renderCellContent(ele.credential, isExpanded)}
                      </span>
                      <span
                        className='invert cursor-pointer'
                        onClick={() => {
                          copyToClipBoard(ele.credential);
                        }}
                      >
                        <lord-icon
                          style={{
                            width: '25px',
                            height: '25px',
                            paddingTop: '3px',
                            paddingLeft: '3px',
                          }}
                          src='https://cdn.lordicon.com/iykgtsbt.json'
                          trigger='hover'
                        ></lord-icon>{' '}
                      </span>
                    </div>
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
