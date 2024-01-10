import { Link as ReactRouterLink } from 'react-router-dom'

import { Divider, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'
import { Path } from '@sheared/paths'

export const NotFoundPage = () => (
  <Stack px={20} alignItems="center">
    <Text fontSize="9xl">404 NotFound</Text>
    <Divider />
    <ChakraLink color="darkBrand" fontSize="8xl" as={ReactRouterLink} to={Path.root}>
      Go home
    </ChakraLink>
  </Stack>
)
