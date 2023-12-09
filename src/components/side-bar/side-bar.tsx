'use client'

import { Drawer, DrawerContent, Flex } from '@chakra-ui/react'
import { FiCompass, FiHeart, FiHome, FiPhone, FiTable, FiTrendingUp } from 'react-icons/fi'
import { LinkItemProps, Nav } from './nav'

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, active: false },
  { name: 'Recommended', icon: FiTrendingUp, active: true },
  { name: 'Categories', icon: FiTable, active: false },
  { name: 'Suggest a category', icon: FiCompass, active: false },
  { name: 'Favorites', icon: FiHeart, active: false },
  { name: 'Contact Us', icon: FiPhone, active: false },
]

interface SidebarWithHeaderProps {
  // onOpen: () => void
  onClose: () => void
  isOpen: boolean
  collapsed?: boolean
}

const Sidebar = ({ isOpen, onClose, collapsed }: SidebarWithHeaderProps) => (
  <Flex as="nav" h="full" minH="full">
    <Nav
      collapsed={collapsed}
      linkItems={LinkItems}
      onClose={() => onClose}
      display={{ base: 'none', md: 'flex' }}
    />
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      returnFocusOnClose={false}
      onOverlayClick={onClose}
      size="full"
    >
      <DrawerContent>
        <Nav onClose={onClose} linkItems={LinkItems} />
      </DrawerContent>
    </Drawer>
  </Flex>
)

export default Sidebar

// export interface SideBarProps {}

// export const SideBar = ({}: SideBarProps) => {
//   return <div>SideBar</div>
// }
