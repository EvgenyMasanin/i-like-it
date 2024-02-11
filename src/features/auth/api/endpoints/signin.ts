import { Tokens } from '~/shared/types/tokens.interface'
import { setCredentials } from '~/entities/user/model/slices'
import { AuthDto, AuthUserDto } from '~/entities/user/model/types/user.interface'

import { authApi } from '../auth.api'

export const signinEndpoint = authApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<AuthUserDto, AuthDto>({
      query(data) {
        return { url: 'signin', method: 'POST', body: data }
      },
      async onQueryStarted({}, { dispatch, queryFulfilled }) {
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

export const { useSigninMutation } = signinEndpoint
