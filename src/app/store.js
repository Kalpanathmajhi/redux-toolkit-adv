import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import apicallSlice from '../features/api/apicall'
export const store = configureStore({
  reducer: {
    counter : counterSlice,
    apiCall : apicallSlice,
  },
 
})