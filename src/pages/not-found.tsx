import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink, Divider, Stack, Text } from '@chakra-ui/react'
import { Paths } from 'src/router'

export const Error = () => (
  <Stack px={20} alignItems="center">
    <Text fontSize="9xl">404 NotFound</Text>
    <Divider />
    <ChakraLink color="darkBrand" fontSize="8xl" as={ReactRouterLink} to={Paths.root}>
      Go home
    </ChakraLink>
  </Stack>
)
