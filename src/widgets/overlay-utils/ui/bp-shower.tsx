import { Center, useBreakpoint } from '@chakra-ui/react'

export interface BpShowerProps {}

export const BpShower = () => {
  const bp = useBreakpoint()
  return (
    <Center w={12} h={12} bgColor="orange" color="white" rounded={10}>
      {bp}
    </Center>
  )
}
