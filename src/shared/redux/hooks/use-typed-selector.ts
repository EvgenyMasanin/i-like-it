import { RootState } from '~/shared/redux'

import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
