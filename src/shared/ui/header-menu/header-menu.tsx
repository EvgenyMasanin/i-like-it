import {
  Box,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'

import { Path } from '~/shared/paths'
import { useTextColor } from '~/shared/theme'

import { ReactElement, ReactNode } from 'react'
import { Link } from 'react-router-dom'

export interface HeaderMenuProps {
  buttonAvatar: ReactElement
  menuAvatar: ReactElement
  username: ReactNode
  themeSwitcher: ReactNode
  authButton: ReactNode
}

export const HeaderMenu = ({
  menuAvatar,
  buttonAvatar,
  username,
  themeSwitcher,
  authButton,
}: HeaderMenuProps) => (
  <Menu>
    <MenuButton
      as={Button}
      variant="unstyled"
      rounded="full"
      display="flex"
      alignItems="center"
      rightIcon={buttonAvatar}
      cursor="pointer"
    >
      <Text display={{ base: 'none', md: 'inline' }} fontSize="2xl" color={useTextColor()}>
        {username}
      </Text>
    </MenuButton>
    <MenuList alignItems="center">
      <br />
      <Center>{menuAvatar}</Center>
      <Center>
        <Text fontSize="4xl">{username}</Text>
      </Center>
      <MenuDivider />
      <MenuItem gap={2}>
        <Text>Theme:</Text>
        {/* //FIXME: ThemeSwitcher to context menu */}
        {themeSwitcher}
      </MenuItem>
      <MenuItem>
        <Link to={Path.profile}>Profile</Link>
      </MenuItem>
      <MenuItem>Account Settings</MenuItem>
      <Box ml={2} mt={2}>
        {authButton}
      </Box>
    </MenuList>
  </Menu>
)
