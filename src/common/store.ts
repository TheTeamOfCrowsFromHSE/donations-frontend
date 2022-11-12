import { configureStore } from '@reduxjs/toolkit'
import { donatesReducer } from './donatesSlice'

export const store = configureStore({
  reducer: {
    donates: donatesReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
