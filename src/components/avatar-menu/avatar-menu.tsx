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
import { Link } from 'react-router-dom'
import { useTypedSelector } from 'src/redux-store/hooks'
import { selectUser } from 'src/redux-store/slices/user.slice'
import { Paths } from 'src/router'
import { useTextColor } from 'src/theme'
import { ThemeSwitcher } from '../theme-switcher'

export const AvatarMenu = () => {
  const { colorMode } = useColorMode()
  const user = useTypedSelector(selectUser)

  const displayUserName = user ? user.name : 'guest'

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
            icon={<BsPerson fontSize="1.5rem" fill={useTextColor()} />}
            src={user?.photo}
            aria-label=""
          />
        }
        cursor="pointer"
      >
        <Text display={{ base: 'none', md: 'inline' }} fontSize="2xl" color={useTextColor()}>
          {displayUserName}
        </Text>
      </MenuButton>
      <MenuList alignItems="center">
        <br />
        <Center>
          <Avatar size="2xl" icon={<BsPerson fontSize="1.5rem" />} src={user?.photo} />
        </Center>
        <Center>
          <Text fontSize="4xl">{displayUserName}</Text>
        </Center>
        <MenuDivider />
        <MenuItem gap={2}>
          <Text>Theme:</Text>
          {/* //FIXME: ThemeSwitcher to context menu */}
          <ThemeSwitcher variant="link" text={colorMode.toUpperCase()} />
        </MenuItem>
        <MenuItem as={Link} to={Paths.profile}>
          Profile
        </MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
