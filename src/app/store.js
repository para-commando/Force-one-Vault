import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/credsList/credsList'

export default configureStore({
  reducer: {
    credsList: counterReducer,
  },
})