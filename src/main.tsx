import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { App } from './components/app'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider cssVarsRoot="" theme={theme}>
    <App />
  </ChakraProvider>
)
