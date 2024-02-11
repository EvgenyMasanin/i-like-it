import { Tokens } from '~/shared/types/tokens.interface'
import { setCredentials } from '~/entities/user/model/slices'
import { AuthUserDto } from '~/entities/user/model/types/user.interface'
import { getAuthorizationHeader } from '~/shared/lib/get-authorization-header'

import { authApi } from '..'

export const getMe = authApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<AuthUserDto, null>({
      query: () => ({
        url: 'me',
        headers: getAuthorizationHeader('access'),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const { accessToken, refreshToken, ...user } = data
          const tokens: Tokens = { accessToken, refreshToken }
          dispatch(setCredentials({ tokens, user }))
        } catch {}
      },
    }),
  }),
  overrideExisting: false,
})
export const { useGetMeQuery } = getMe
