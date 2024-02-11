import { Button, Stack, Text } from '@chakra-ui/react'

import { useState } from 'react'

import { useSigninMutation } from '../../api/endpoints'

export const AuthForm = () => {
  const [signinData] = useState({
    email: 'gmasmin@gmail.com',
    password: '12345678',
  })

  const [signin] = useSigninMutation()
  return (
    <Stack spacing={2} maxW="2xl">
      <Text fontSize="4xl">AuthForm:</Text>
      <Text fontSize="2xl">{signinData.email}</Text>
      <Text fontSize="2xl">{signinData.password}</Text>
      <Button onClick={() => signin(signinData)}>login</Button>
    </Stack>
  )
}
