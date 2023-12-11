import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import { StoreProvider } from './redux-store/store-provider'
import { AppChakraProvider } from './theme/app-chakra-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <AppChakraProvider>
      <AppRouter />
    </AppChakraProvider>
  </StoreProvider>
)
