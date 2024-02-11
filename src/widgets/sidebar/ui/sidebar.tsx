import { CloseButton, Drawer, DrawerContent, Flex } from '@chakra-ui/react'

import { Logo } from '~/entities/logo/ui'
import { useAlternativeBgColor } from '~/shared/theme'
import { selectIsSidebarDrawerOpen, useSidebarActions } from '~/shared/redux/slices/sidebar.slice'

import { useSelector } from 'react-redux'

import { Nav } from './nav'
import { linkItems } from './nav/link-items'

interface SidebarWithHeaderProps {}

export const Sidebar = ({}: SidebarWithHeaderProps) => {
  const isDrawerOpen = useSelector(selectIsSidebarDrawerOpen)
  const { toggleDrawer } = useSidebarActions()

  return (
    <Flex as="nav">
      <Nav linkItems={linkItems} display={{ base: 'none', md: 'flex' }} />
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={() => toggleDrawer()}
        returnFocusOnClose={false}
        onOverlayClick={() => toggleDrawer()}
        size="full"
      >
        <DrawerContent>
          <Flex
            h="20"
            px="4"
            mb="4"
            alignItems="center"
            bg={useAlternativeBgColor()}
            justifyContent="space-between"
          >
            <Logo />
            <CloseButton onClick={() => toggleDrawer()} />
          </Flex>
          <Nav linkItems={linkItems} />
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}
