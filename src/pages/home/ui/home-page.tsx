import { Center, Text } from '@chakra-ui/react'

import { Logo } from '~/entities/logo/ui'

export const HomePage = () => (
  <Center>
    <Text fontSize="6xl" fontFamily="monospace" lineHeight={1.5}>
      Welcome to:
    </Text>
    <Logo fontSize="6xl" />
  </Center>
)
