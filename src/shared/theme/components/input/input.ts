import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, StyleFunctionProps } from '@chakra-ui/react'

import { isCustomColorScheme } from './input.types'
import { brandColorModeShade, colors } from '../../colors'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const inputColorSchemeStyleFunction = ({ colorScheme, colorMode }: StyleFunctionProps) => {
  const isChakraColorScheme = !isCustomColorScheme(colorScheme)
  if (isChakraColorScheme) return {}

  const colorShade = brandColorModeShade[colorMode]
  const color = colors[colorScheme][colorShade]

  return definePartsStyle({
    field: {
      _focusVisible: {
        borderColor: color,
        boxShadow: `0 0 0 1px ${color}`,
      },
    },
  })
}

export const inputTheme = defineMultiStyleConfig({
  defaultProps: {
    colorScheme: 'brand',
  },
  variants: {
    outline: inputColorSchemeStyleFunction,
    flushed: inputColorSchemeStyleFunction,
    filled: inputColorSchemeStyleFunction,
  },
})
