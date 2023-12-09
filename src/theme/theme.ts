import {
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react'
import { sizes } from './sizes'
import { colors } from './colors'
import { components } from './components'

export const theme = extendTheme(
  {
    sizes,
    colors,
    components,
  },
  withDefaultColorScheme({ colorScheme: 'brand' }),
)
