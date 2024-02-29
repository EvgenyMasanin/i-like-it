import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseQuery = (subUrl?: string, headers?: HeadersInit) => {
  const baseUrl = `${import.meta.env.VITE_API_URL}`
  return fetchBaseQuery({ baseUrl: subUrl ? `${baseUrl}/${subUrl}` : baseUrl, headers })
}
