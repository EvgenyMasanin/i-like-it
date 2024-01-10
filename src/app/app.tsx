import { AppRouter } from '@pages/router/app-router'
import { AppChakraProvider } from './providers/app-chakra-provider'
import { StoreProvider } from './providers/store-provider'

export const App = () => (
  <StoreProvider>
    <AppChakraProvider>
      <AppRouter />
    </AppChakraProvider>
  </StoreProvider>
)
