import { configureStore } from '@reduxjs/toolkit';
import credsListReducer from '../features/credsList/credsListSlice';

export const store = configureStore({
  reducer: {
    credsList: credsListReducer,
  },
});

export default store;
