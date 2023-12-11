import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { theme } from './theme'

interface AppChakraProviderProps {
  children: ReactNode
}

export const AppChakraProvider = ({ children }: AppChakraProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)
