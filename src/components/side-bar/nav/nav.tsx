import { BoxProps, CloseButton, Flex, Stack } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { Logo } from 'src/components/logo'
import { useAlternativeBgColor } from 'src/theme'
import { NavItems } from './nav-items'

export interface LinkItemProps {
  name: string
  icon: IconType
  active: boolean
  path: string
}

export interface NavProps extends BoxProps {
  onClose: () => void
  collapsed?: boolean
  linkItems: Array<LinkItemProps>
}

export const Nav = ({ onClose, linkItems, collapsed, ...rest }: NavProps) => (
  <Stack
    // h="full"
    // overflow="hidden"
    transition=".3s ease"
    w={{ base: 'full', md: 'fit-content' }}
    {...rest}
  >
    <Flex
      h="20"
      px="4"
      mb="4"
      alignItems="center"
      bg={useAlternativeBgColor()}
      justifyContent="space-between"
      display={{ base: 'flex', md: 'none' }}
    >
      <Logo />
      <CloseButton onClick={onClose} />
    </Flex>
    <NavItems linkItems={linkItems} collapsed={collapsed} />
  </Stack>
)
