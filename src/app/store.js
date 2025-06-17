// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import logoReducer from './features/logo/logoSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      logo: logoReducer,
    },
  })
}

export const store = makeStore()