import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'credsList',
  initialState: {
    value: [],
  },
  reducers: {
    setCredsList: (state) => {
      console.log("🚀 ~ state:", state)
      state;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCredsList, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
