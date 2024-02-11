import { bindActionCreators, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { useTypedDispatch } from '~/shared/redux'
// import { adminUser } from '~/shared/mock/user.mock'
import { Tokens } from '~/shared/types/tokens.interface'
import { tokensService } from '~/shared/services/tokens.service'
import { User } from '~/entities/user/model/types/user.interface'

export interface UserState {
  user: User | null
  isAuthorized: boolean
  tokens: Tokens
  isTokenExpired: boolean
}

const initialState: UserState = {
  user: null,
  // user: adminUser,
  isAuthorized: false,
  tokens: {
    accessToken: tokensService.getAccessToken(),
    refreshToken: tokensService.getRefreshToken(),
  },
  isTokenExpired: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, tokens },
      }: PayloadAction<Omit<UserState, 'isAuthorized' | 'isTokenExpired'>>
    ) => {
      state.user = user
      state.tokens = tokens
      state.isTokenExpired = false
      state.isAuthorized = true

      tokensService.setTokens(tokens)
    },
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      tokensService.setAccessToken(payload)
      state.tokens.accessToken = payload
      state.isTokenExpired = false
    },
    setRefreshToken: (state, { payload }: PayloadAction<string>) => {
      tokensService.setRefreshToken(payload)
      state.tokens.refreshToken = payload
    },
    setIsTokenExpired: (state, { payload }: PayloadAction<boolean>) => {
      state.isTokenExpired = payload
    },
    logOut: (state) => {
      state.user = initialState.user
      state.isAuthorized = initialState.isAuthorized
      state.tokens = initialState.tokens
      state.isTokenExpired = initialState.isTokenExpired

      tokensService.wipeTokens()
    },
  },
  selectors: {
    selectUser: (state) => state.user,
    selectUserId: (state) => state.user?.id,
    selectAccessToken: (state) => state.tokens.accessToken,
    selectRefreshToken: (state) => state.tokens.refreshToken,
  },
})

export const { setCredentials, logOut, setAccessToken, setRefreshToken, setIsTokenExpired } =
  userSlice.actions

export function useUserActions() {
  const dispatch = useTypedDispatch()
  return bindActionCreators(userSlice.actions, dispatch)
}

export const { selectUser, selectUserId, selectAccessToken, selectRefreshToken } =
  userSlice.selectors
