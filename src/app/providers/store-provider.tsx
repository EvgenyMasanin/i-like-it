import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@sheared/redux-store'

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => (
  <Provider store={store}>{children}</Provider>
)
