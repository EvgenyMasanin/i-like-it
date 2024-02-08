import { theme } from '@chakra-ui/react'

import { RecursivePartial } from '~/shared/types/utils'

import { inputTheme } from './input/input'
import { buttonTheme } from './button/button'

export const components: RecursivePartial<typeof theme.components> = {
  Button: buttonTheme,
  Input: inputTheme,
}
