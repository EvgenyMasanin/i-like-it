/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'

export function useMount(onMount: () => void) {
  useEffect(() => {
    onMount()
  }, [])
}
