import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './slices/root-reducer'

export const store = configureStore({
  reducer: rootReducer,
})
