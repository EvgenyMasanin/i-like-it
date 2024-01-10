import { bindActionCreators } from '@reduxjs/toolkit'
import {
  logOut,
  setAccessToken,
  setCredentials,
  setIsTokenExpired,
  setRefreshToken,
} from '@sheared/redux-store/slices/user.slice'
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
