import { bindActionCreators } from '@reduxjs/toolkit'

/* eslint-disable boundaries/element-types */
import {
  logOut,
  setAccessToken,
  setCredentials,
  setIsTokenExpired,
  setRefreshToken,
} from '~/entities/user/model/slices'

import { useTypedDispatch } from '.'

const AllActions = {
  logOut,
  setAccessToken,
  setCredentials,
  setIsTokenExpired,
  setRefreshToken,
}

export const useActions = () => {
  const dispatch = useTypedDispatch()

  return bindActionCreators(AllActions, dispatch)
}
