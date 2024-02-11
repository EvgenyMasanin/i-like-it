import { combineReducers } from '@reduxjs/toolkit'

import { membersApi } from '~/entities/member/api'
import { authApi } from '~/features/auth/api/auth.api'
import { userSlice } from '~/entities/user/model/slices'
import { sidebarSlice } from '~/shared/redux/slices/sidebar.slice'

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [sidebarSlice.name]: sidebarSlice.reducer,
  [membersApi.reducerPath]: membersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})
