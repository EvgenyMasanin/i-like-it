import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'

import { useTypedDispatch } from '.'

export function useActions<A, M extends ActionCreatorsMapObject<A>>(actions: M) {
  const dispatch = useTypedDispatch()
  return bindActionCreators(actions, dispatch)
}
