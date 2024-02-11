import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}/auth` }),
  endpoints: () => ({}),
})
