import { useColorModeValue } from '@chakra-ui/react'
import { colors } from '..'

export const useTextColor = () => useColorModeValue(colors.lightBrand, 'white')
