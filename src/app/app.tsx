import { AppRouter } from '~/pages/router/app-router'

import { StoreProvider } from './providers/store-provider'
import { AppChakraProvider } from './providers/app-chakra-provider'

export const App = () => (
  <StoreProvider>
    <AppChakraProvider>
      <AppRouter />
    </AppChakraProvider>
  </StoreProvider>
)
