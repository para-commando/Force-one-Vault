import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateCredCellOne = createAsyncThunk(
  'credsList/updateCredCellOne',
  async (data) => {
    const response = await fetch('http://127.0.0.1:3000/updateCredCellOne', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
      },
      body: JSON.stringify(data),
    }); // replace with your API endpoint
    const resp = await response.json();
    console.log('🚀 ~ resp.data:', resp.response.data);
    if (resp.response.data) {
      return resp.response.data;
    }
    return { error: 'something went wrong while updating data' };
  }
);

export const updateCredCellTwo = createAsyncThunk(
  'credsList/updateCredCellTwo',
  async (data) => {
    const response = await fetch('http://127.0.0.1:3000/updateCredCellTwo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
      },
      body: JSON.stringify(data),
    }); // replace with your API endpoint
    const resp = await response.json();
    console.log('🚀 ~ resp:', resp);
    return resp.response.data;
  }
);

export const updateCredCellThree = createAsyncThunk(
  'credsList/updateCredCellThree',
  async (data) => {
    const response = await fetch('http://127.0.0.1:3000/updateCredCellThree', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
      },
      body: JSON.stringify(data),
    }); // replace with your API endpoint
    const resp = await response.json();
    console.log('🚀 ~ resp:', resp);
    return resp.response.data;
  }
);

export const addNewCred = createAsyncThunk(
  'credsList/addNewCred',
  async (data) => {
    const response = await fetch('http://127.0.0.1:3000/addNewCred', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
      },
      body: JSON.stringify(data),
    }); // replace with your API endpoint
    const resp = await response.json();
    console.log('🚀 ~ resp:', resp);
    return resp.response.data;
  }
);

export const deleteCred = createAsyncThunk(
  'credsList/deleteCred',
  async (data) => {
    if (confirm('Delete this credential?')) {
      const response = await fetch('http://127.0.0.1:3000/deleteCred', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
        },
        body: JSON.stringify(data),
      }); // replace with your API endpoint
      const resp = await response.json();
      console.log('🚀 ~ resp:', resp);
      return resp.response.data;
    } else {
      return;
    }
  }
);

export const getAllCreds = createAsyncThunk(
  'credsList/getAllCreds',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/getAllCreds', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
      },
    }); // replace with your API endpoint
    const resp = await response.json();
     console.log("🚀 ~ resp---------getAllCreds:", resp)
     return resp.response.data;
  }
);

export const credsListSlice = createSlice({
  name: 'credsList',
  initialState: {
    value: [],
  },
  reducers: {
    setCredsList: (state, action) => {
      console.log('🚀 ~ action:', action);
      state.value = action.payload;
    },

    togglePasswordVisibility: (state, action) => {
      const index = state.value.findIndex(
        (cred) => cred.mainId === action.payload.mainId
      );
      if (index !== -1) {
        state.value[index].isHidden = !action.payload.isHidden;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCredCellOne.pending, (state) => {
        console.log('pendinggggg');

        state.status = 'loading';
      })
      .addCase(updateCredCellOne.fulfilled, (state, action) => {
        if (action.payload.source) {
          const index = state.value.findIndex(
            (cred) => cred.mainId === action.payload.mainId
          );
          console.log('🚀 ~ index:', index);
          if (index !== -1) {
            state.value[index].source = action.payload.source;
          }
          localStorage.setItem('creds', JSON.stringify(state.value));
        } else {
          alert('something went wrong while updating data. Please try again');
        }
      })
      .addCase(updateCredCellOne.rejected, (state, action) => {
        alert('something went wrong while updating data. Please try again');
      })
      .addCase(updateCredCellTwo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCredCellTwo.fulfilled, (state, action) => {
        if (action.payload.uniqueCredId) {
          const index = state.value.findIndex(
            (cred) => cred.mainId === action.payload.mainId
          );
          console.log('🚀 ~ index:', index);
          if (index !== -1) {
            state.value[index].uniqueCredId = action.payload.uniqueCredId;
          }
          localStorage.setItem('creds', JSON.stringify(state.value));
        } else {
          alert('something went wrong while updating data. Please try again');
        }
      })
      .addCase(updateCredCellTwo.rejected, (state, action) => {
        alert('something went wrong while updating data. Please try again');
      })
      .addCase(updateCredCellThree.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCredCellThree.fulfilled, (state, action) => {
        if (action.payload.credential) {
          const index = state.value.findIndex(
            (cred) => cred.mainId === action.payload.mainId
          );
          console.log('🚀 ~ index:', index);
          if (index !== -1) {
            state.value[index].credential = action.payload.credential;
          }
          localStorage.setItem('creds', JSON.stringify(state.value));
        } else {
          alert('something went wrong while updating data. Please try again');
        }
      })
      .addCase(updateCredCellThree.rejected, (state, action) => {
        alert('something went wrong while updating data. Please try again');
      })
      .addCase(addNewCred.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewCred.fulfilled, (state, action) => {
        if (action.payload.source) {
          state.value.push(action.payload);
        } else {
          alert('something went wrong while adding data. Please try again');
        }
      })
      .addCase(addNewCred.rejected, (state, action) => {
        alert('something went wrong while adding data. Please try again');
      })
      .addCase(deleteCred.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCred.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        if (action.payload.mainId) {
          const newArray = state.value.filter(
            (cred) => cred.mainId != action.payload.mainId
          );
          state.value = [...newArray];
          localStorage.setItem('creds', JSON.stringify(state.value));
        } else {
          alert('something went wrong while deleting data. Please try again');
        }
      })
      .addCase(deleteCred.rejected, (state, action) => {
        alert('something went wrong while deleting data. Please try again');
      })
      .addCase(getAllCreds.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCreds.fulfilled, (state, action) => {
        console.log('🚀 ~ .addCase ~ action:', action.payload);
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        if (action.payload) {
          state.value = action.payload;
        } else {
          alert('something went wrong while fetching data. Please try again');
        }
      })
      .addCase(getAllCreds.rejected, (state, action) => {
        alert('something went wrong while fetching data. Please try again');
      });
  },
});

export const { setCredsList, togglePasswordVisibility } =
  credsListSlice.actions;
export default credsListSlice.reducer;
