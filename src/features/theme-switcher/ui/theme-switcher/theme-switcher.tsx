import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, ButtonProps, IconButton, useColorMode } from '@chakra-ui/react'

import { Variants } from '~/shared/theme'

interface ThemeSwitcherProps {
  variant?: Variants
  withIcon?: boolean
  onlyIcon?: boolean
}

export const ThemeSwitcher = (props: ThemeSwitcherProps & ButtonProps) => {
  const { onlyIcon = false, variant, withIcon, ...buttonProps } = props

  const { colorMode, toggleColorMode } = useColorMode()

  const showIcon = withIcon

  const Icon = colorMode === 'light' ? MoonIcon : SunIcon

  return onlyIcon ? (
    <IconButton
      as={Button}
      rounded="full"
      variant="ghost"
      onClick={toggleColorMode}
      icon={<Icon />}
      aria-label=""
    />
  ) : (
    <Button as="a" gap={2} variant={variant} {...buttonProps} onClick={toggleColorMode}>
      {colorMode.toUpperCase()}
      {showIcon && <Icon />}
    </Button>
  )
}
