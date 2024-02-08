import { RecursivePartial } from '@shared/types/utils'
import { StyleFunctionProps, theme } from '@chakra-ui/react'

import { isCustomColorScheme } from './input.types'
import { brandColorModeShade, colors } from '../../colors'

const inputColorSchemeStyleFunction = ({ colorScheme, colorMode }: StyleFunctionProps) => {
  const colorShade = brandColorModeShade[colorMode]

  if (!isCustomColorScheme(colorScheme)) return {}

  const color = colors[colorScheme][colorShade]

  return {
    field: {
      _focusVisible: {
        borderColor: color,
        boxShadow: `0 0 0 1px ${color}`,
      },
      _invalid: {
        // borderColor: 'red',
        // boxShadow: string;
      },
    },
  }
}

export const inputTheme: RecursivePartial<typeof theme.components.Input> = {
  defaultProps: {
    colorScheme: 'brand',
  },
  variants: {
    outline: inputColorSchemeStyleFunction,
    flushed: inputColorSchemeStyleFunction,
    filled: inputColorSchemeStyleFunction,
  },
}
