import { Path } from '~/shared/paths'
import { useMount } from '~/shared/hooks'
import { selectAuthState, selectUser } from '~/entities/user/model/slices'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMatches, useNavigate } from 'react-router-dom'

import { useLazyGetMeQuery } from '../../api/endpoints'

export const useAuth = (init?: 'init') => {
  const [getMe, { isLoading, isSuccess, isError }] = useLazyGetMeQuery()

  useMount(() => {
    if (init) {
      getMe(null)
    }
  })

  // const user = useSelector(selectUser)
  const { user, isAuthorizeFailed } = useSelector(selectAuthState)

  const navigate = useNavigate()
  const [{ pathname }] = useMatches()

  const isAuthPage = pathname.includes(Path.auth)

  useEffect(() => {
    if (user && !isLoading && isAuthPage) {
      navigate(Path.root)
    }
  }, [user, isLoading, isAuthPage, navigate])

  return { isAuth: !!user, isAuthorizeFailed, isLoading, isSuccess, isError }
}
