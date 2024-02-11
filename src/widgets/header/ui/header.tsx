import { useColorModeValue } from '@chakra-ui/react'

import { Logo } from '~/entities/logo'
import { Search } from '~/features/search'
import { LogoutButton } from '~/features/auth'
import { UserAvatar, Username } from '~/entities/user/ui'
import { Header as UIHeader, SidebarActionButton } from '~/shared/ui'
import { ThemeSwitcher } from '~/features/theme-switcher'

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <UIHeader
    actionButton={<SidebarActionButton />}
    logo={<Logo mx="auto" minW={205} />}
    searchBar={
      <Search mx={10} w="full" maxW={600} bg={useColorModeValue('transparent', 'gray.800')} />
    }
    username={<Username />}
    buttonAvatar={<UserAvatar size="sm" />}
    themeSwitcher={<ThemeSwitcher variant="link" />}
    menuAvatar={<UserAvatar size="2xl" />}
    logoutButton={<LogoutButton />}
  />
)
