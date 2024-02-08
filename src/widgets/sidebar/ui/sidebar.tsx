import { Path } from '@shared/paths'
import { Drawer, DrawerContent, Flex } from '@chakra-ui/react'

import { FiCompass, FiHeart, FiPhone, FiTable, FiTrendingUp } from 'react-icons/fi'

import { LinkItemProps, Nav } from './nav'

interface SidebarWithHeaderProps {
  // onOpen: () => void
  onClose: () => void
  isOpen: boolean
  collapsed?: boolean
}

const linkItems: LinkItemProps[] = [
  {
    name: 'Recommended',
    path: Path.recommended,
    icon: FiTrendingUp,
  },
  { name: 'Categories', path: Path.categories, icon: FiTable },
  { name: 'Suggest a category', path: Path.suggestCategory, icon: FiCompass },
  { name: 'Favorites', path: Path.favorites, icon: FiHeart },
  { name: 'Contact Us', path: Path.contactUs, icon: FiPhone },
]
export const Sidebar = ({ isOpen, onClose, collapsed }: SidebarWithHeaderProps) => (
  <Flex as="nav">
    <Nav
      collapsed={collapsed}
      linkItems={linkItems}
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
        <Nav onClose={onClose} linkItems={linkItems} />
      </DrawerContent>
    </Drawer>
  </Flex>
)

// export interface SideBarProps {}

// export const SideBar = ({}: SideBarProps) => {
//   return <div>SideBar</div>
// }
