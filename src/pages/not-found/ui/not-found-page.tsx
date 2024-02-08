import { Path } from '@shared/paths'
import { Divider, Link as ChakraLink, Stack, Text } from '@chakra-ui/react'

import { Link as ReactRouterLink } from 'react-router-dom'

export const NotFoundPage = () => (
  <Stack px={20} alignItems="center">
    <Text fontSize="9xl">404 NotFound</Text>
    <Divider />
    <ChakraLink color="darkBrand" fontSize="8xl" as={ReactRouterLink} to={Path.root}>
      Go home
    </ChakraLink>
  </Stack>
)
