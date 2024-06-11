import { createSlice } from '@reduxjs/toolkit';

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
      alert('Are you sure you want to delete this credential?')
      const newArray = state.value.filter(
        (cred) => cred.mainId != action.payload.mainId
      );
     state.value = [...newArray]
      localStorage.setItem('creds', JSON.stringify(state.value));
    },
  },
});

export const {
  setCredsList,
  updateCredCellOne,
  updateCredCellTwo,
  updateCredCellThree,
  deleteCred
} = credsListSlice.actions;
export default credsListSlice.reducer;
