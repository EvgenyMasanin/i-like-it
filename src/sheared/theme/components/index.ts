import { theme } from '@chakra-ui/react'
import { RecursivePartial } from '@sheared/types/utils'
import { buttonTheme } from './button/button'
import { inputTheme } from './input/input'

export const components: RecursivePartial<typeof theme.components> = {
  Button: buttonTheme,
  Input: inputTheme,
}
