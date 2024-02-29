import { useNavigation } from 'react-router-dom'

export function useRouterLoading() {
  const { state } = useNavigation()

  return state === 'loading'
}
