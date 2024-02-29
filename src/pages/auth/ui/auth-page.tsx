import { Box, Text, VStack } from '@chakra-ui/react'

import { Header } from '~/shared/ui'
import { Main } from '~/widgets/main'
import { AuthForm } from '~/features/auth'
import { useAuth } from '~/features/auth/lib/hooks'

export interface AuthPageProps {}

export const AuthPage = () => {
  useAuth()

  return (
    <>
      <Header />
      <Main placeContent="center">
        <Box>Preview</Box>
        <VStack spacing={2}>
          <Text fontSize="5xl">AuthPage:</Text>
          <AuthForm />
        </VStack>
      </Main>
    </>
  )
}
