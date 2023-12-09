import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface MainProps {
  children: ReactNode
}

export const Main = ({ children }: MainProps) => (
  <Flex
    as="main"
    h="calc(100% - 48px)"
    w="full"
    maxW={{
      sm: 'full',
      lg: 'maxWidth',
    }}
    mx="auto"
    pt={2}
    gap={4}
    justifyContent="space-between"
  >
    {children}
  </Flex>
)
