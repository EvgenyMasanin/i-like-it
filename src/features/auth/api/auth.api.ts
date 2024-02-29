import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReAuth } from '~/shared/api/base-query-with-re-auth'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: baseQueryWithReAuth('auth'),
  endpoints: () => ({}),
})
