import { Stack, Text } from '@chakra-ui/react'

import { AuthForm } from '~/features/auth'
import { useAuth } from '~/features/auth/lib/hooks'

export interface AuthPageProps {}

export const AuthPage = () => {
  useAuth()

  return (
    <Stack spacing={2}>
      <Text fontSize="5xl">AuthPage:</Text>
      <AuthForm />
    </Stack>
  )
}
