import { combineReducers } from '@reduxjs/toolkit'

import { membersApi } from '~/entities/member/api'
import { authApi } from '~/features/auth/api/auth.api'
import { userSlice } from '~/entities/user/model/slices'
import { sidebarSlice } from '~/shared/redux/slices/sidebar.slice'
import { categoryApi } from '~/entities/category/api/category.api'

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [sidebarSlice.name]: sidebarSlice.reducer,
  [membersApi.reducerPath]: membersApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})
