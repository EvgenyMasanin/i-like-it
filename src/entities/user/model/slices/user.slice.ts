import { bindActionCreators, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppRootState, useTypedDispatch } from '~/shared/redux'
// import { adminUser } from '~/shared/mock/user.mock'
import { Tokens } from '~/shared/types/tokens.interface'
import { tokensService } from '~/shared/services/tokens.service'
import { User } from '~/entities/user/model/types/user.interface'

export interface UserState {
  user: User | null
  isAuthorizeFailed: boolean
  tokens: Tokens
}

const initialState: UserState = {
  user: null,
  // user: adminUser,
  isAuthorizeFailed: false,
  tokens: {
    accessToken: tokensService.getAccessToken(),
    refreshToken: tokensService.getRefreshToken(),
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, tokens },
      }: PayloadAction<Omit<UserState, 'isAuthorizeFailed' | 'isTokenExpired'>>
    ) => {
      state.user = user
      state.tokens = tokens
      state.isAuthorizeFailed = false

      tokensService.setTokens(tokens)
    },
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      tokensService.setAccessToken(payload)
      state.tokens.accessToken = payload
    },
    setRefreshToken: (state, { payload }: PayloadAction<string>) => {
      tokensService.setRefreshToken(payload)
      state.tokens.refreshToken = payload
    },
    setTokens: (state, { payload }: PayloadAction<Tokens>) => {
      tokensService.setTokens(payload)
      state.tokens = payload
    },
    // setIsTokenExpired: (state, { payload }: PayloadAction<boolean>) => {
    //   state.isTokenExpired = payload
    // },
    logOut: (state) => {
      state.user = initialState.user
      state.isAuthorizeFailed = initialState.isAuthorizeFailed
      state.tokens = initialState.tokens
      state.isAuthorizeFailed = true
      // state.isTokenExpired = initialState.isTokenExpired

      tokensService.wipeTokens()
    },
    setIsAuthorizeFailed: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthorizeFailed = payload
    },
  },
  selectors: {
    selectUser: (state) => state.user,
    selectUserId: (state) => state.user?.id,
    selectUserAvatarURL: (state) => state.user?.avatarURL ?? '',
    selectAccessToken: (state) => state.tokens.accessToken,
    selectRefreshToken: (state) => state.tokens.refreshToken,
    // selectAuthState: createSelector([({ q }: any) => q], (q) => ({ q: 1 })),
    // selectAuthState: ({ user, isAuthorizeFailed }) => ({ user, isAuthorizeFailed }),
  },
})

export const selectAuthState = createSelector(
  [({ user }: AppRootState) => user],
  ({ isAuthorizeFailed, user }) => ({ user, isAuthorizeFailed })
)

export const {
  setCredentials,
  logOut,
  setAccessToken,
  setRefreshToken,
  setTokens,
  setIsAuthorizeFailed,
} = userSlice.actions

export function useUserActions() {
  const dispatch = useTypedDispatch()
  return bindActionCreators(userSlice.actions, dispatch)
}

export const {
  selectUser,
  selectUserId,
  selectAccessToken,
  selectRefreshToken,
  selectUserAvatarURL,
} = userSlice.selectors
