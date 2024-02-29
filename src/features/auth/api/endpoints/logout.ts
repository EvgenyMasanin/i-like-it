import { logOut } from '~/entities/user/model/slices'
import { getAuthorizationHeader } from '~/shared/lib/get-authorization-header'

import { getMe } from '.'
import { authApi } from '..'

export const logout = authApi.injectEndpoints({
  endpoints: (build) => ({
    logout: build.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
        headers: getAuthorizationHeader('access'),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { meta } = await queryFulfilled
        if (meta?.response?.status === 205) {
          dispatch(logOut())
        }

        getMe.endpoints.getMe.initiate(null)
      },
    }),
  }),
  overrideExisting: false,
})

export const { useLogoutMutation } = logout
