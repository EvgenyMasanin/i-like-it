import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, ButtonProps, IconButton, useColorMode } from '@chakra-ui/react'

import { Variants } from '~/shared/theme'

interface ThemeSwitcherProps {
  text?: string
  variant?: Variants
  withIcon?: boolean
}

export const ThemeSwitcher = (props: ThemeSwitcherProps & ButtonProps) => {
  const { text, variant, withIcon, ...buttonProps } = props

  const { colorMode, toggleColorMode } = useColorMode()

  const showIcon = withIcon

  const Icon = colorMode === 'light' ? MoonIcon : SunIcon

  return text ? (
    <Button as="a" gap={2} variant={variant} {...buttonProps} onClick={toggleColorMode}>
      {text}
      {showIcon && <Icon />}
    </Button>
  ) : (
    <IconButton
      as={Button}
      rounded="full"
      variant="ghost"
      onClick={toggleColorMode}
      icon={<Icon />}
      aria-label=""
    />
  )
}
