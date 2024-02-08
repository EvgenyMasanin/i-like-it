import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '~/shared/redux'
import { adminUser } from '~/shared/mock/user.mock'
import { Tokens, User } from '~/entities/user/model/types/user.types'

export interface UserState {
  user: User | null
  isAuthorized: boolean
  tokens: Tokens & {
    isTokenExpired: boolean
  }
}

const initialState: UserState = {
  user: adminUser,
  isAuthorized: false,
  tokens: {
    accessToken: '',
    refreshToken: '',
    isTokenExpired: false,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, tokens } }: PayloadAction<Omit<UserState, 'isAuthorized'>>
    ) => {
      state.user = user
      state.tokens = tokens
      state.isAuthorized = true
    },
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.tokens.accessToken = payload
      state.tokens.isTokenExpired = false
    },
    setRefreshToken: (state, { payload }: PayloadAction<string>) => {
      state.tokens.refreshToken = payload
    },
    setIsTokenExpired: (state, { payload }: PayloadAction<boolean>) => {
      state.tokens.isTokenExpired = payload
    },
    logOut: (state) => {
      state.user = null
      state.isAuthorized = false
      state.tokens = {
        accessToken: '',
        refreshToken: '',
        isTokenExpired: false,
      }
    },
  },
})

export const { setCredentials, logOut, setAccessToken, setRefreshToken, setIsTokenExpired } =
  userSlice.actions

export const selectUser = (state: RootState) => state.user.user
export const selectUserId = (state: RootState) => selectUser(state)?.id