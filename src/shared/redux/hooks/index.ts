import { AppDispatch, RootState } from '~/shared/redux'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export * from './useActions'
