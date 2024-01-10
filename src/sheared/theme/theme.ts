import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { colors } from './colors'
import { components } from './components'
import { sizes } from './sizes'

export const theme = extendTheme(
  {
    sizes,
    colors,
    components,
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
)
