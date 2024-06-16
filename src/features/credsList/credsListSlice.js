import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const sendCredsList = createAsyncThunk(
  'credsList/sendCredsList',
  async (data) => {
    const response = await fetch('http://127.0.0.1:3000/dd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }); // replace with your API endpoint
    const resp = await response.json();
    console.log("🚀 ~ resp:", resp)
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

    updateCredCellOne: (state, action) => {
      const index = state.value.findIndex(
        (cred) => cred.mainId === action.payload.mainId
      );
      console.log('🚀 ~ index:', index);
      if (index !== -1) {
        state.value[index].source = action.payload.source;
      }
      localStorage.setItem('creds', JSON.stringify(state.value));
    },
    updateCredCellTwo: (state, action) => {
      console.log('🚀 ~ action:', action);
      const index = state.value.findIndex(
        (cred) => cred.mainId === action.payload.mainId
      );
      if (index !== -1) {
        state.value[index].uniqueCredId = action.payload.uniqueCredId;
      }
      localStorage.setItem('creds', JSON.stringify(state.value));
    },
    updateCredCellThree: (state, action) => {
      const index = state.value.findIndex(
        (cred) => cred.mainId === action.payload.mainId
      );
      if (index !== -1) {
        state.value[index].credential = action.payload.credential;
      }
      localStorage.setItem('creds', JSON.stringify(state.value));
    },
    deleteCred: (state, action) => {
      if (confirm('Delete this credential?')) {
        const newArray = state.value.filter(
          (cred) => cred.mainId != action.payload.mainId
        );
        state.value = [...newArray];
        localStorage.setItem('creds', JSON.stringify(state.value));
      }
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
      .addCase(sendCredsList.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendCredsList.fulfilled, (state, action) => {
        console.log('sdffffffffffffffffffffffffffffffffffffffffffffff');
        // state.status = 'succeeded';
        // state.value = action.payload;
        // console.log("🚀 ~ .addCase ~ state.value:", state.value)
        // console.log("🚀 ~ .addCase ~ action.payload:", action.payload)
        // const index = state.value.findIndex(
        //   (cred) => cred.mainId === action.payload.mainId
        // );
        // console.log('🚀 ~ index:', index);
        // if (index !== -1) {
        //   state.value[index].source = action.payload.source;
        // }
        // localStorage.setItem('creds', JSON.stringify(state.value));
      })
      .addCase(sendCredsList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {
  setCredsList,
  updateCredCellOne,
  updateCredCellTwo,
  updateCredCellThree,
  deleteCred,
  togglePasswordVisibility,
} = credsListSlice.actions;
export default credsListSlice.reducer;
