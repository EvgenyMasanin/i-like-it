import {
  Avatar,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/react'
import { BsPerson } from 'react-icons/bs'
import { useTextColor } from 'src/theme'
import { ThemeSwitcher } from '../theme-switcher'

export const AvatarMenu = () => {
  const { colorMode } = useColorMode()

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="unstyled"
        rounded="full"
        display="flex"
        alignItems="center"
        rightIcon={
          <Avatar
            size="sm"
            backgroundColor="transparent"
            icon={<BsPerson fontSize="1.5rem" />}
            src="https://avatars.dicebear.com/api/male/username.svg"
            aria-label=""
          />
        }
        cursor="pointer"
      >
        <Text display={{ base: 'none', md: 'inline' }} fontSize="2xl" color={useTextColor()}>
          User Name
        </Text>
      </MenuButton>
      <MenuList alignItems="center">
        <br />
        <Center>
          <Avatar size="2xl" src="https://avatars.dicebear.com/api/male/username.svg" />
        </Center>
        <br />
        <Center>
          <p>Username</p>
        </Center>
        <br />
        <MenuDivider />
        <MenuItem gap={2}>
          <Text>Theme:</Text>
          {/* //FIXME: ThemeSwitcher to context menu */}
          <ThemeSwitcher variant="link" text={colorMode.toUpperCase()} />
        </MenuItem>
        <MenuItem>Your Servers</MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
