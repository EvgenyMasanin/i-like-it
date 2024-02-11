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
} from '@chakra-ui/react'

import { Path } from '~/shared/paths'
import { useTextColor } from '~/shared/theme'
import { useTypedSelector } from '~/shared/redux'
import { selectUser } from '~/entities/user/model/slices'

import { ReactNode } from 'react'
import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export interface AvatarMenuProps {
  themeSwitcher: ReactNode
}

export const AvatarMenu = ({ themeSwitcher }: AvatarMenuProps) => {
  const user = useTypedSelector(selectUser)

  const displayUserName = user ? user.username : 'guest'

  const avatarSrc = `${import.meta.env.VITE_API_URL}/${user?.avatarURL}`

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
            src={avatarSrc}
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
          <Avatar size="2xl" icon={<BsPerson fontSize="1.5rem" />} src={avatarSrc} />
        </Center>
        <Center>
          <Text fontSize="4xl">{displayUserName}</Text>
        </Center>
        <MenuDivider />
        <MenuItem gap={2}>
          <Text>Theme:</Text>
          {/* //FIXME: ThemeSwitcher to context menu */}
          {themeSwitcher}
        </MenuItem>
        <MenuItem as={Link} to={Path.profile}>
          Profile
        </MenuItem>
        <MenuItem>Account Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  )
}
