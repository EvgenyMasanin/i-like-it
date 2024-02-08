import { useColorModeValue } from '@chakra-ui/react'
import { colors } from '../colors'

export const useTextColor = () => useColorModeValue(colors.lightBrand, 'white')
