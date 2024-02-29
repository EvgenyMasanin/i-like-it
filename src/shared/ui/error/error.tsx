import { Icon, Stack, Text } from '@chakra-ui/react'

import { FaSadTear } from 'react-icons/fa'

export interface ErrorProps {
  error: unknown
}

export const Error = ({ error }: ErrorProps) => {
  console.log('🚀 ~ Error ~ error:', error)
  return (
    <Stack alignItems="center">
      <Text fontSize="2xl">Something went wrong.</Text>
      <Icon as={FaSadTear} fontSize="4xl" />
    </Stack>
  )
}
