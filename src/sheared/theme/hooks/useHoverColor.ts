import { useColorModeValue } from '@chakra-ui/react'

export const useHoverColor = () => {
  const bg = useColorModeValue('brand.500', 'brand.200')
  return { bg, color: 'white' }
}
