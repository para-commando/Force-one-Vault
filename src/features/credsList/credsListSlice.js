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
    console.log('🚀 ~ resp:', resp);
    return data;
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
    return data;
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
    return data;
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
    return resp;
  }
);

export const deleteCred = createAsyncThunk(
  'credsList/deleteCred',
  async (data) => {
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
    return data;
  }
);

export const getAllCreds = createAsyncThunk(
  'credsList/getAllCreds',
  async (data) => {
    const response = await fetch('http://127.0.0.1:3000/getAllCreds', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.kBZIPlziE8JB1qhEwtl6KGvG8Xu9whXzcE1lvpeUTSM`,
      },
    }); // replace with your API endpoint
    const resp = await response.json();
    console.log('🚀 ~ resp:', resp);
    return resp;
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
        state.status = 'loading';
      })
      .addCase(updateCredCellOne.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        const index = state.value.findIndex(
          (cred) => cred.mainId === action.payload.mainId
        );
        console.log('🚀 ~ index:', index);
        if (index !== -1) {
          state.value[index].source = action.payload.source;
        }
        localStorage.setItem('creds', JSON.stringify(state.value));
      })
      .addCase(updateCredCellOne.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateCredCellTwo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCredCellTwo.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        const index = state.value.findIndex(
          (cred) => cred.mainId === action.payload.mainId
        );
        console.log('🚀 ~ index:', index);
        if (index !== -1) {
          state.value[index].source = action.payload.uniqueCredId;
        }
        localStorage.setItem('creds', JSON.stringify(state.value));
      })
      .addCase(updateCredCellTwo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateCredCellThree.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCredCellThree.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        const index = state.value.findIndex(
          (cred) => cred.mainId === action.payload.mainId
        );
        console.log('🚀 ~ .addCase ~ state.value:', state.value);
        console.log('🚀 ~ .addCase ~ index:', index);
        console.log('🚀 ~ .addCase ~ action.payload:', action.payload);

        if (index !== -1) {
          state.value[index].credential = action.payload.credential;
        }
        localStorage.setItem('creds', JSON.stringify(state.value));
      })
      .addCase(updateCredCellThree.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewCred.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addNewCred.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
      })
      .addCase(addNewCred.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteCred.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteCred.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        if (confirm('Delete this credential?')) {
          const newArray = state.value.filter(
            (cred) => cred.mainId != action.payload.mainId
          );
          state.value = [...newArray];
          localStorage.setItem('creds', JSON.stringify(state.value));
        }
      })
      .addCase(deleteCred.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCredsList, togglePasswordVisibility } =
  credsListSlice.actions;
export default credsListSlice.reducer;
