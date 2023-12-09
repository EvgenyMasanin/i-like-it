import { Center, Flex, Hide, IconButton, Stack, useColorModeValue } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { useAlternativeBgColor, useAppHeight } from 'src/theme'
import { AvatarMenu } from '../avatar-menu'
import { Logo } from '../logo'
import { Search } from '../search'

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
        <Hide below="md">
          <Search mx={10} w="full" maxW={600} bg={useColorModeValue('transparent', 'gray.800')} />
        </Hide>

        <Stack direction="row" spacing={7}>
          <AvatarMenu />
        </Stack>
      </Flex>
    </Center>
  )
}
