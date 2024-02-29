import { Button, Stack, Text } from '@chakra-ui/react'

import { useSigninMutation } from '~/features/auth/api/endpoints'

import { useState } from 'react'

export interface SigninFormProps {}

export const SigninForm = ({}: SigninFormProps) => {
  const [signin] = useSigninMutation()

  const [signinData] = useState({
    email: 'gmasmin@gmail.com',
    password: '12345678',
  })

  return (
    <Stack spacing={2} maxW="2xl">
      <Text fontSize="4xl">AuthForm:</Text>
      <Text fontSize="2xl">{signinData.email}</Text>
      <Text fontSize="2xl">{signinData.password}</Text>
      <Button onClick={() => signin(signinData)}>login</Button>
    </Stack>
  )
}
