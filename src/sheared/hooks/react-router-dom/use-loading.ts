import { useNavigation } from 'react-router-dom'

export function useLoading() {
  const { state } = useNavigation()

  return state === 'loading'
}
