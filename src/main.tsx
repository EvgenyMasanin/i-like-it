import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { App } from './components/app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider cssVarsRoot={''}>
    <App />
  </ChakraProvider>
)
