import { combineReducers } from '@reduxjs/toolkit'

import { userSlice } from '~/entities/user/model/slices'

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
})
