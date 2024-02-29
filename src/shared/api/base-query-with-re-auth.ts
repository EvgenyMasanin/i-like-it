import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'

// eslint-disable-next-line boundaries/element-types
import { setIsAuthorizeFailed, setTokens } from '~/entities/user/model/slices'

import { baseQuery } from './base-query'
import { getAuthorizationHeader } from '../lib'
import { Tokens } from '../types/tokens.interface'

type BaseQueryWithReAuth = (
  subUrl: string
) => BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>

export const baseQueryWithReAuth: BaseQueryWithReAuth =
  (subUrl) => async (args, api, extraOptions) => {
    const baseResponse = await baseQuery(subUrl)(args, api, extraOptions)

    if (!baseResponse.error) return baseResponse

    if (baseResponse.error.status === 'FETCH_ERROR') {
      console.log(`🚀 ~ I like it server is not responding`)
    }
    if (baseResponse.error.status !== 401) {
      api.dispatch(setIsAuthorizeFailed(true))
      return baseResponse
    }

    const refreshTokensResponse = await baseQuery('auth', getAuthorizationHeader('refresh'))(
      '/refresh',
      api,
      extraOptions
    )

    if (refreshTokensResponse.error) {
      api.dispatch(setIsAuthorizeFailed(true))
      return baseResponse
    }

    api.dispatch(setTokens(refreshTokensResponse.data as Tokens))

    if (typeof args === 'string') return baseQuery(subUrl)(args, api, extraOptions)

    return baseQuery(subUrl)(
      { ...args, headers: getAuthorizationHeader('access') },
      api,
      extraOptions
    )
  }
