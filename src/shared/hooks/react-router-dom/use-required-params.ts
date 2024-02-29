import { useParams } from 'react-router-dom'

export function useRequiredParams<T extends string | Record<string, string | undefined>>() {
  const params = useParams<T>()
  return params as T
}
