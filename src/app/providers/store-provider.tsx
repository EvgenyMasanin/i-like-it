import { store } from '@shared/redux-store'

import { ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>{children}</Provider>
)
