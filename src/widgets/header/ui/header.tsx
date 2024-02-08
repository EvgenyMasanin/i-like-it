import { Logo } from '@entities/logo/ui'
import { Search } from '@features/search/ui'
import { useAlternativeBgColor, useAppHeight } from '@shared/theme'
import { AvatarMenu } from '@entities/user/ui/avatar-menu'
import { Box, Center, Flex, Hide, IconButton, Spacer, useColorModeValue } from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'

interface HeaderProps {
  menuButtonAction?: () => void
}

export const Header = ({ menuButtonAction }: HeaderProps) => {
  const { headerHeight } = useAppHeight()
  return (
    <Center bg={useAlternativeBgColor()} pl={{ base: 1, lg: 0 }} pr={{ base: 3, lg: 0 }}>
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
          <IconButton
            onClick={menuButtonAction}
            rounded="full"
            variant="brandGhost"
            mx="1"
            fontSize="2xl"
            aria-label="open menu"
            icon={<FiMenu />}
          />
          <Logo mx="auto" minW={205} />
        </Flex>
        <Spacer />
        <Hide below="md">
          <Search mx={10} w="full" maxW={600} bg={useColorModeValue('transparent', 'gray.800')} />
        </Hide>
        <Spacer />
        <Box>
          <AvatarMenu />
        </Box>
      </Flex>
    </Center>
  )
}
