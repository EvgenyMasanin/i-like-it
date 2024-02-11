import { Center, Flex, Hide, Spacer } from '@chakra-ui/react'

import { HeaderMenu, HeaderMenuProps } from '~/shared/ui'
import { useAlternativeBgColor, useAppHeight } from '~/shared/theme'

import { ReactNode } from 'react'

interface HeaderProps extends HeaderMenuProps {
  actionButton: ReactNode
  logo: ReactNode
  searchBar: ReactNode
}

export const Header = ({
  actionButton,
  buttonAvatar,
  logoutButton,
  menuAvatar,
  themeSwitcher,
  username,
  logo,
  searchBar,
}: HeaderProps) => {
  const { headerHeight } = useAppHeight()

  return (
    <Center
      as="header"
      bg={useAlternativeBgColor()}
      pl={{ base: 1, lg: 0 }}
      pr={{ base: 3, lg: 0 }}
    >
      <Flex
        minW={{
          base: 'full',
          lg: 'maxWidth',
        }}
        h={headerHeight}
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex w={{ base: 'full', md: 'fit-content' }} alignItems="center">
          {actionButton}
          {logo}
        </Flex>
        <Spacer />
        <Hide below="md">{searchBar}</Hide>
        <Spacer />
        <Flex>
          <HeaderMenu
            buttonAvatar={buttonAvatar}
            menuAvatar={menuAvatar}
            logoutButton={logoutButton}
            username={username}
            themeSwitcher={themeSwitcher}
          />
        </Flex>
      </Flex>
    </Center>
  )
}
