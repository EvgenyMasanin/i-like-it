import { useColorModeValue } from '@chakra-ui/react'

import { darkBrand, lightBrand } from '..'

export function useBrandColor() {
  return useColorModeValue(lightBrand, darkBrand)
}
