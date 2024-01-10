import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@sheared/theme'
import { ReactNode } from 'react'

interface AppChakraProviderProps {
  children: ReactNode
}

export const AppChakraProvider = ({ children }: AppChakraProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)
