import { Center, Flex, Hide, Spacer } from '@chakra-ui/react'

import { Logo } from '~/entities/logo'
import { HeaderMenu, HeaderMenuProps } from '~/shared/ui'
import { useAlternativeBgColor, useAppHeight } from '~/shared/theme'

import { ReactNode } from 'react'

interface HeaderProps extends Partial<HeaderMenuProps> {
  actionButton?: ReactNode
  searchBar?: ReactNode
}

export const Header = ({
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
          <Logo mx="auto" minW={205} />
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
