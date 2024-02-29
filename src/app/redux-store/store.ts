import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { membersApi } from '~/entities/member/api'
import { authApi } from '~/features/auth/api/auth.api'
import { categoryApi } from '~/entities/category/api/category.api'

import { rootReducer } from './root-reducer'

const middleware = [membersApi.middleware, authApi.middleware, categoryApi.middleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleware),
})

setupListeners(store.dispatch)
