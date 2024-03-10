import { Center, Flex, Hide, Spacer } from '@chakra-ui/react'

import { HeaderMenu, HeaderMenuProps } from '~/shared/ui'
import { useAlternativeBgColor, useAppHeight } from '~/shared/theme'

import { ReactElement, ReactNode } from 'react'

interface HeaderProps extends Partial<HeaderMenuProps> {
  logo?: ReactNode
  actionButton?: ReactNode
  searchBar?: ReactNode
  buttonAvatar: ReactElement
}

export const Header = ({
  logo,
  actionButton,
  buttonAvatar,
  authButton,
  menuAvatar,
  themeSwitcher,
  username,
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
            authButton={authButton}
            username={username}
            themeSwitcher={themeSwitcher}
          />
        </Flex>
      </Flex>
    </Center>
  )
}
