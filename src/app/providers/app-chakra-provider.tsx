import { theme } from '@shared/theme'
import { ChakraProvider } from '@chakra-ui/react'

import { ReactNode } from 'react'

interface AppChakraProviderProps {
  children: ReactNode
}

export const AppChakraProvider = ({ children }: AppChakraProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)
