import { Button, ButtonGroup, useColorModeValue } from '@chakra-ui/react'

import { Path } from '~/shared/paths'
import { Logo } from '~/entities/logo'
import { Search } from '~/features/search'
import { LogoutButton } from '~/features/auth'
import { useAuth } from '~/features/auth/lib/hooks'
import { Header as UIHeader, SidebarActionButton } from '~/shared/ui'
import { CurrentUserAvatar, Username } from '~/entities/user/ui'
import { ThemeSwitcher } from '~/features/theme-switcher'

import { Link } from 'react-router-dom'

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const { isAuth } = useAuth()

  const authButtons = isAuth ? (
    <LogoutButton />
  ) : (
    <ButtonGroup>
      <Button as={Link} to={`${Path.auth}/${Path.signin}`}>
        signin
      </Button>
      <Button as={Link} to={`${Path.auth}/${Path.signup}`}>
        signup
      </Button>
    </ButtonGroup>
  )

  return (
    <UIHeader
      logo={<Logo mx="auto" minW={205} />}
      actionButton={<SidebarActionButton />}
      searchBar={
        <Search mx={10} w="full" maxW={600} bg={useColorModeValue('transparent', 'gray.800')} />
      }
      username={<Username />}
      buttonAvatar={<CurrentUserAvatar size="sm" />}
      themeSwitcher={<ThemeSwitcher variant="link" />}
      menuAvatar={<CurrentUserAvatar size="2xl" />}
      authButton={authButtons}
    />
  )
}
