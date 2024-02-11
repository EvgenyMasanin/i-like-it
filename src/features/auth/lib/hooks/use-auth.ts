import { Path } from '~/shared/paths'
import { selectUser } from '~/entities/user/model/slices'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMatches, useNavigate } from 'react-router-dom'

import { useGetMeQuery } from '../../api/endpoints'

export const useAuth = () => {
  const { isLoading, isSuccess, isError } = useGetMeQuery(null)
  const user = useSelector(selectUser)

  const navigate = useNavigate()
  const [{ pathname }] = useMatches()

  const isAuthPage = pathname.includes(Path.auth)

  useEffect(() => {
    // if (!user && !isLoading && !isAuthPage) {
    //   navigate(Path.auth)
    // }

    if (user && !isLoading && isAuthPage) {
      navigate(Path.root)
    }
  }, [user, isLoading, isAuthPage, navigate])

  return { isLoading, isSuccess, isError }
}
