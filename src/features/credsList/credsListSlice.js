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
      console.log("🚀 ~ index:", index)
      if (index !== -1) {
        state.value[index].source = action.payload.source;
      }
    },
    updateCredCellTwo: (state, action) => {
      console.log("🚀 ~ action:", action)
      const index = state.value.findIndex(
        (cred) => cred.mainId === action.payload.mainId
      );
      if (index !== -1) {
        state.value[index].uniqueCredId = action.payload.uniqueCredId;
      }
    },
    updateCredCellThree: (state, action) => {
       const index = state.value.findIndex(
        (cred) => cred.mainId === action.payload.mainId
      );
      if (index !== -1) {
        state.value[index].credential = action.payload.credential;
      }
    },
  },
});

export const { setCredsList, updateCredCellOne, updateCredCellTwo, updateCredCellThree } = credsListSlice.actions;
export default credsListSlice.reducer;
