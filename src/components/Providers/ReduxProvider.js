// providers/ReduxProvider.js
'use client'

import { store } from '../../app/store'
import { Provider } from 'react-redux'

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}